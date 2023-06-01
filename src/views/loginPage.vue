<template>
    <v-container fluid>
        <v-row class="align-center  text-center">
            <v-col cols="12" md="7" class="text-center">
                <div v-show="showDiv1">
                    <h1 style="color: #0B1620; font-size: 70px; font-weight: bold;" class="text-center mb-10">
                        Login to your Account</h1>
                    <form>
                        <!--                        signin form -->
                        <v-text-field
                                label="Username"
                                placeholder="Username"
                                outlined
                                style="border-radius: 17px; width: 300px;"
                                class="mx-auto mt-10"
                        ></v-text-field>
                        <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                label="Password"
                                placeholder="Password"
                                hint="At least 8 characters"
                                outlined
                                style="width: 300px; border-radius: 17px; color: #0B1620; border-color: #0B1620"
                                class="mx-auto mt-3"
                                @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-btn
                                x-large
                                color="primary"
                                dark
                                class="mx-auto mt-10 text-h4 px-16 py-8 mb-0"
                                style="border-radius: 10px; font-weight: bold"
                                to="/chat-room"
                        >
                            Sign in
                        </v-btn>
                    </form>
                </div>
                <div v-show="showDiv2">
                    <h1 style="color: white; font-size: 70px; font-weight: bold;" class="text-center mb-10">Fill
                        belows to Sign Up!</h1>

                    <!--                    signup form -->
                    <form>
                        <v-row class="pa-0">
                            <v-row class="pa-0">
                                <v-col class="pa-0">
                                    <v-text-field
                                            label="Name"
                                            placeholder="Name"
                                            outlined
                                            style="border-radius: 17px; width: 300px;"
                                            class="mx-auto mt-10 pa-0"
                                    ></v-text-field>
                                </v-col>
                                <v-col class="pa-0">
                                    <v-text-field
                                            label="Last Name"
                                            placeholder="Last Name"
                                            outlined
                                            style="border-radius: 17px; width: 300px;"
                                            class="mx-auto mt-10 pa-0"
                                    ></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row class="pa-0">
                                <v-col class="pa-0">
                                    <v-text-field
                                            label="Username"
                                            placeholder="Username"
                                            outlined
                                            style="border-radius: 17px; width: 300px;"
                                            class="mx-auto mt-10 pa-0"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-file-input
                                            label="Profile Photo"
                                            outlined
                                            prepend-icon="mdi-camera"
                                            style="width: 300px; border-radius: 15px"
                                            class="mx-auto mt-6 pa-0"
                                    ></v-file-input>
                                </v-col>
                            </v-row>

                            <v-row class="pa-0">
                                <v-col class="pa-0">
                                    <v-text-field
                                            label="Password"
                                            placeholder="Password"
                                            outlined
                                            style="border-radius: 17px; width: 300px;"
                                            class="mx-auto mt-10"
                                    ></v-text-field>
                                </v-col>
                                <v-col class="pa-0">
                                    <v-text-field
                                            label="Repeat Password"
                                            placeholder="Repeat Password"
                                            outlined
                                            style="border-radius: 17px; width: 300px;"
                                            class="mx-auto mt-10 pa-0"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                        <v-btn
                                x-large
                                color="primary"
                                class="py-8 px-10 text-h4 mt-9 mb-0"
                                style="font-weight: bold; "
                        >
                            Sign Up!
                        </v-btn>
                    </form>
                </div>
            </v-col>
            <v-col cols="12" md="5" class="align-center pa-0" style="align-items: center;">
                <v-img src="../assets/Dark-blue.jpg" style="height: 101.2vh; position: page"
                       class="align-center pa-0">
                    <h1 class="" style="font-size: 6rem; color: white; font-weight: bold; -webkit-text-stroke: 3px black;
                        text-shadow: black"> {{ signingText }} </h1>
                    <v-btn x-large color="background" class="ma-16 pr-10 pl-10 py-8 text-h4"
                           @click="showDiv1=!showDiv1; showDiv2=!showDiv2"
                           style="border-radius: 10px; font-weight: bold"> {{ signingBtn }}
                    </v-btn>
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            registerStatus: false,

            // password field
            show1: false,
            password: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
            },
            //     date Picker
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            datePicker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            //  show div
            showDiv1: true,
            showDiv2: false,
            items: [
                {title: 'Dashboard', icon: 'mdi-view-dashboard'},
                {title: 'Profile', icon: 'mdi-account'},
                {title: 'Setting', icon: 'mdi-setting'}
            ],
            drawer: false,
            group: null,
            mini: true

        }
    },
    computed: {
        signingBtn() {
            return (this.showDiv1 ? 'Sign Up!' : 'Sign In!')
        },
        signingText() {
            return this.showDiv1 ? 'New Here?' : 'Do you have account?'
        }
    },
}
</script>

<style scoped>

</style>