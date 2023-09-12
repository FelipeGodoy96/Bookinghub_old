package br.com.bookinghubgodoynetworks.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Bean
    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults())
                .csrf((csrf) -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
                        .requestMatchers(HttpMethod.POST, "clients").permitAll()
                        .requestMatchers("clients/**").authenticated()
                        .requestMatchers(HttpMethod.GET,"api/search-suggestions/**").permitAll()
                        .anyRequest().authenticated()
                )
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/auth/**").authenticated()
//                        .anyRequest().authenticated()
//                )
                .httpBasic(Customizer.withDefaults());
//                .formLogin(Customizer.withDefaults());
//                .authorizeHttpRequests((auth) -> auth
//                .anyRequest().authenticated()
//                )

//                .httpBasic(Customizer.withDefaults());


//                .formLogin((formLogin) -> formLogin
//                        .loginPage("/login")
//                        .loginProcessingUrl("/auth/login")
//                        .defaultSuccessUrl("/", true)
//                        .failureUrl("/unauthorized")
//                )
//                .logout((logout) -> logout
//                        .logoutUrl("/logout")
//                        .deleteCookies("JSESSIONID")
//                        .logoutSuccessHandler(logout.getLogoutSuccessHandler())
//                );


        return http.build();
    }



    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
