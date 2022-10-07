<template>
    <v-row>
        <v-col v-for="item in items" :key="item" class="d-flex child-flex" cols="4">
            <v-img :src="item.src"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src: 'https://scontent.fscl9-1.fna.fbcdn.net/v/t39.30808-6/279210660_510747230780787_1842843464725728369_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFwDo5na5vd8QCKVxhj_2VrzyoEIPEQBILPKgQg8RAEgrI4aLOHICpIlVxzUQAKwPWKPCQG-BGymTi4n8E9sf5J&_nc_ohc=x3S4NvF0LxgAX9lFwAK&_nc_zt=23&_nc_ht=scontent.fscl9-1.fna&oh=00_AT8B0lMrF6xPY4MZ0vVrJMUEMOUzAoOd5Ncyya_Iz2M8FA&oe=634485B1',
                },
                {
                    src: 'https://scontent.fscl9-2.fna.fbcdn.net/v/t39.30808-6/310703420_768011587946517_2601998719931733101_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFkduP8Zm0hBNpylIHR5d8nhSsIxvRiqYaFKwjG9GKphoSJlfl_ZR7PozsMeLPHOOwcLECwQK6qxG_Ps91OQBPY&_nc_ohc=7rh_r9nxc3kAX8a4RZ1&_nc_zt=23&_nc_ht=scontent.fscl9-2.fna&oh=00_AT_pc7X9_jG4IeJ8yNc2z62fVZZ9KqHwxeL_jblTpIsBIA&oe=634598AF',
                },
                {
                    src: 'https://scontent.fscl9-2.fna.fbcdn.net/v/t39.30808-6/291493296_554159759772867_8989387223696983933_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEcXFb0gi7b_ryc_MkSOajcoNiLnVUTNRag2IudVRM1Fn_KBJoq1MsFv2xVxR7URgS3SIMWMql8xS-ycKCu-JQ8&_nc_ohc=xthcGfEpM0oAX93m9JW&_nc_zt=23&_nc_ht=scontent.fscl9-2.fna&oh=00_AT-9jqnwQM1N-iELhFHhTso3WSLlOtjbBeAo2vK2BNcgFg&oe=63456306',
                },
                {
                    src: 'https://scontent.fscl9-1.fna.fbcdn.net/v/t39.30808-6/295507382_570725418116301_4205831721476882811_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeElSy8Q4gVS23MHC8KVO88C7XPvJo2T0mHtc-8mjZPSYXyz59tr3k0WxCltjZj2UGLjEMRYM-ZmFGYrzgQBQ3eP&_nc_ohc=b73WWUGcfP8AX9VdVp9&tn=XVpncwWs-7ZbUUkx&_nc_zt=23&_nc_ht=scontent.fscl9-1.fna&oh=00_AT-jHfKSFHIIHwYAboDTNPwCpGNamNN93Ma1BLLPgLiTZA&oe=6344A6C9',
                },
            ],
        }
    },
}
</script>
