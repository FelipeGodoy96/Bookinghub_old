package br.com.APIrest.APIrest.security;

import br.com.APIrest.APIrest.security.usuario.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private TokenManager tokenManager;

    @Override
    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    public AuthenticationManager authenticationManagerBean() throws Exception {
//        CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
//        configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/usuarios/**", "/auth/**").permitAll()
                .antMatchers(HttpMethod.GET,"/usuarios/**").permitAll()
                .antMatchers(HttpMethod.GET,"/reservas/produtos/**").authenticated()
                .antMatchers("/caracteristicas/**",
                                        "/categoria_produtos/**",
                                        "/cidade_produtos/**",
                                        "/categorias/**",
                                        "/cidades/**",
                                        "/cliente/**",
                                        "/imagens/**",
                                        "/papeis/**",
                                        "/produtos/**"
                                        ).permitAll()
              //.antMatchers("/auth/**").permitAll()
                .antMatchers("/h2/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .headers().frameOptions().disable()
                .and()
                .cors()
                .and()
                .csrf().disable()
                .addFilterBefore(new JwtAuthenticationFilter(tokenManager, usuarioService),
                        UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                .authenticationEntryPoint(new JwtAuthenticationEntryPoint());

//        // Desabilitado o cors
//        http.cors().and().csrf().disable();
//        // Liberando o policiamento da sessão
//        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//        // Autorizando qualquer requisição com permissão total
//        http.authorizeRequests().anyRequest().permitAll();
    }



    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(this.usuarioService)
                .passwordEncoder(new BCryptPasswordEncoder());
    }

//    @Override
//    public void configure(WebSecurity web) {
//        web.ignoring().antMatchers("/**.html", "/v2/api-docs", "/webjars/**",
//                "/configuration/**", "/swagger-resources/**", "/css/**", "/**.ico", "/js/**");
//    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
        configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    private static class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

        @Override
        public void commence(HttpServletRequest request, HttpServletResponse response,
                             AuthenticationException authException) throws IOException {

            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Você não está autorizado a acessar esse recurso.");
        }
    }
}
