package com.example.springbootkeycloak.KeycloakClient;

import com.example.springbootkeycloak.Dto.UserDTO;
import com.example.springbootkeycloak.Utility.KeycloakSecurityUtil;

import javax.ws.rs.core.Response;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.common.util.CollectionUtil;
import org.keycloak.representations.idm.CredentialRepresentation;
//import org.keycloak.representations.idm.UserProfileAttributeMetadata;
//import org.keycloak.representations.idm.UserProfileMetadata;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/keycloak")
public class UserResource {

    @Autowired
    KeycloakSecurityUtil keycloakUtil;

    @Value("${realm}")
    private String realm;

    @GetMapping
    @RequestMapping("/users")
    public List<UserDTO> getUsers(){
        Keycloak keycloak = keycloakUtil.getKeycloakInstance();
        List<UserRepresentation> userRepresentations =
                keycloak.realm(realm).users().list();
        return mapUsers(userRepresentations);
    }

    @GetMapping(value = "/users/{id}")
    public UserDTO getUser(@PathVariable("id") String id){
        Keycloak keycloak = keycloakUtil.getKeycloakInstance();
        return mapUser(keycloak.realm(realm).users().get(id).toRepresentation());
    }

    @PutMapping(value = "/user")
    public Response updateUser(UserDTO user){
        UserRepresentation userRep = mapUserRep(user);
        Keycloak keycloak = keycloakUtil.getKeycloakInstance();
        keycloak.realm(realm).users().get(user.getId()).update(userRep);

        return  Response.ok(user).build();
    }


    @PostMapping(value = "/user")
//    @RequestMapping("/user")
    public Response createUser(@RequestBody UserDTO user){
        UserRepresentation userRep = mapUserRep(user);
        Keycloak keycloak = keycloakUtil.getKeycloakInstance();
        keycloak.realm(realm).users().create(userRep);

        return Response.ok(user).build();

    }


    @DeleteMapping(value = "users/{id}")
    public Response deleteUser(@PathVariable("id") String id){
        Keycloak keycloak = keycloakUtil.getKeycloakInstance();
        keycloak.realm(realm).users().delete(id);

        return Response.ok().build();
    }

    private List<UserDTO> mapUsers (List<UserRepresentation> userRepresentation){
        List<UserDTO> users = new ArrayList<>();

        if (CollectionUtil.isNotEmpty(userRepresentation)){
            userRepresentation.forEach(userRep ->
                    users.add(mapUser(userRep)));
        }
        return users;
    }

    private UserDTO mapUser(UserRepresentation userRep) {
        UserDTO user = new UserDTO();

        user.setId(userRep.getId());
        user.setFirstname(userRep.getFirstName());
        user.setLastname(userRep.getLastName());
        user.setEmail(userRep.getEmail());
        user.setUserName(userRep.getUsername());
        user.setAttributes(userRep.getAttributes());

        return user;
    }

    private UserRepresentation mapUserRep(UserDTO user){
        UserRepresentation userRep = new UserRepresentation();
        userRep.setUsername(user.getUserName());
        userRep.setFirstName(user.getFirstname());
        userRep.setLastName(user.getLastname());
        userRep.setEmail(user.getEmail());
        userRep.setEnabled(true);
        userRep.setEmailVerified(true);
        List<CredentialRepresentation> creds = new ArrayList<>();
        CredentialRepresentation cred = new CredentialRepresentation();
        cred.setTemporary(false);
        cred.setValue(user.getPassword());
        creds.add(cred);
        userRep.setCredentials(creds);
        userRep.setAttributes(user.getAttributes());

        return userRep;
    }

}
