package br.com.APIrest.APIrest.controller;

import br.com.APIrest.APIrest.security.EPermits;
import br.com.APIrest.APIrest.model.Role;
import br.com.APIrest.APIrest.model.Usuarios;
import br.com.APIrest.APIrest.repository.RepositoryUsuarios;
import br.com.APIrest.APIrest.repository.RepositoryRole;
import br.com.APIrest.APIrest.security.InfoRequisicao;
import br.com.APIrest.APIrest.security.UsuariosRegister;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class ControllerUsuariosRegister {

    @Autowired
    RepositoryUsuarios repositoryUsuarios;
    @Autowired
    RepositoryRole repositoryRole;
    @Autowired
    PasswordEncoder encoder;

        @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UsuariosRegister signUpRequest) {
        if (repositoryUsuarios.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new InfoRequisicao("Erro: O Email já está Registrado!"));
        }

        Usuarios usuarios = new Usuarios(signUpRequest.getUsername(),
                signUpRequest.getNome(),
                signUpRequest.getSobrenome(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

//        if (strRoles == null) {
//            Role userRole = repositoryRole.findByName(EPermits.ROLE_USER)
//                    .orElseThrow(() -> new RuntimeException("Erro: a Função" +
//                            "" +
//                            " não encontrado."));
//            roles.add(userRole);
//        } else {
//            strRoles.forEach(role -> {
//                switch (role) {
//                    case "admin":
//                        Role adminRole = repositoryRole.findByName(EPermits.ROLE_ADMIN)
//                                .orElseThrow(() -> new RuntimeException("Erro: Função não encontrada."));
//                        roles.add(adminRole);
//
//                        break;
//                    case "mod":
//                        Role modRole = repositoryRole.findByName(EPermits.ROLE_MODERATOR)
//                                .orElseThrow(() -> new RuntimeException("Erro: Função não encontrada."));
//                        roles.add(modRole);
//
//                        break;
//                    default:
//                        Role userRole = repositoryRole.findByName(EPermits.ROLE_USER)
//                                .orElseThrow(() -> new RuntimeException("Erro: Função não encontrada."));
//                        roles.add(userRole);
//                }
//            });
//        }

        usuarios.setRoles(roles);
        repositoryUsuarios.save(usuarios);

        return ResponseEntity.ok(new InfoRequisicao("Usuario Registrado com sucesso."));
    }
}
