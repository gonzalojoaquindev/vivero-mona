<template>
  <v-app >
    <v-app-bar app shrink-on-scroll color="primary" dark>
      <v-avatar class="profile" color="grey" tile height="100%" width="128">
        <v-img src="https://scontent.fscl9-1.fna.fbcdn.net/v/t1.6435-9/118868398_100216935167154_7826007498706926082_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE1X6ycRJn4dbrL-tf8ZTCjXpkLFZX9NgFemQsVlf02AfeSVVvBc9-PX7bMQ0s5ne8WjzwY-usA_-xf9AE3Zknd&_nc_ohc=HDzYMG8TVhUAX8gOqep&_nc_ht=scontent.fscl9-1.fna&oh=00_AT8elD8TCdEFbvI-3BXm5tf9YZeet1F9EHYm2Z4Et0lqyw&oe=636789C2" ></v-img>
      </v-avatar>

      <v-spacer></v-spacer>
      <v-toolbar-title> <strong>Vivero Monas</strong> </v-toolbar-title>
    
      <v-spacer></v-spacer>
    
      
      <v-btn text to="/">
        Inicio
      </v-btn>
      <v-btn text to="/catalogo">
        Catálogo
      </v-btn>
      <v-btn text>
        Nuestro vivero
      </v-btn>
      <v-btn text>
        Blog
      </v-btn>
      <v-btn text>
        Contacto
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

<v-footer dark padless>
  <v-card class="flex" flat tile>
    <v-card-title class="primary">
      <strong class="subheading">Tienes dudas?, Encuentranos en nuestras redes sociales</strong>

      <v-spacer></v-spacer>

      <v-btn class="mx-4" icon href="https://web.facebook.com/vivero.monas">
        <v-icon size="24px" >
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn class="mx-4"  icon href="https://www.instagram.com/viveromonas/?hl=en">
        <v-icon size="24px" >
          mdi-instagram
        </v-icon>
      </v-btn>
      <v-btn class="mx-4"  icon href="https://web.facebook.com/vivero.monas">
        <v-icon size="24px" >
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="py-2 white--text text-center">
      Copyright {{ new Date().getFullYear() }} © <strong> Vivero Monas </strong> | Catemu - Copiapó
    </v-card-text>
  </v-card>
</v-footer>

  </v-app>


  


</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
