<template>
    <v-container fluid class="pa-0">
            <v-row style="height: 100px">
                <v-col cols="12" md="3" class="pa-0">
                    <v-card :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                            style=""
                            height="100%" class="elevation-21 text-center">
                        <h1 class="pt-8"> Chats </h1>
                    </v-card>
                </v-col>

                <v-col cols="12" md="9" class="pa-0">
                    <v-card height="100%" style="border-radius: 0;"
                            :style="{'background-color': $vuetify.theme.currentTheme.secondary}"
                            class="elevation-10 mx-auto text-center pt-8">


                        <h1 :style="{'color': $vuetify.theme.currentTheme.primary}"> {{getUserName()}} </h1>

                    </v-card>

                </v-col>
            </v-row>
        <v-row class="pt-1">
            <v-col cols="12"  md="3" :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                   style="height: 91vh"
                    class="ma-0 pa-0 pt-1"
            >
                <v-row class="">
                    <v-col class="">
                        <card-array class="pa-0 ma-0"></card-array>
                    </v-col>
                </v-row>

            </v-col>

            <v-col cols="12" md="9" :style="{'background-color': $vuetify.theme.currentTheme.background}">

            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import cardArray from "@/components/user-card.vue";

export default {
    name: "chatPage",
    components: {cardArray},
    data() {
        return {
            userInfo: [
                {userName: 'Ali Naseri'},
                {userName: 'Mahdi Chavoshi'},
                {userName: 'Tohid Yagmury'}
            ]
        };
    },
    methods: {
        getUserName() {
        //     returns user's name
            return 'Ali Naseri'
        }
    },
}

</script>

<style scoped>

</style>