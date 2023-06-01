<template>
    <div>
        <v-card
                v-for="(card, index) in cardArray"
                :key="index"
                :class="{'selected-card': card.selected}"
                class="mb-1  mt-1 ml-0 mr-0 pr-0 pl-0"
                :style="{'background-color': $vuetify.theme.currentTheme.primary}"
                style=""
                @click="selectCard(index)"
        >
            <v-row class="mb-1 mx-auto mr-0 ml-0 pr-0 pl-0">
                <v-col cols="12" md="4" class="d-flex align-center pr-0 pl-0 mr-0 ml-0">
                    <v-avatar
                            class="pl-3 mx-auto "
                            size="90px"

                    >
                        <img
                                alt="Avatar"
                                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        >
                    </v-avatar>
                </v-col>
                <v-col cols="12" md="8" class="pr-0 pl-0 mr-0 ml-0">
                    <div>
                        <v-card-title class="">{{ card.title }}</v-card-title>
                    </div>
                    <div>
                        <v-card-text>
                            <v-card-text v-for="(subject, index) in card.subjects" :key="index" class="ml-2">
                                {{ subject }}
                            </v-card-text>
                        </v-card-text>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "user-card",
    data() {
        return {
            cardArray: [
                {
                    title: "Ali Naseri",
                    subjects: ["Lorem Ipsum ..."],
                    selected: false
                },
                {
                    title: "Tohid Yagmury",
                    subjects: ["Lorem Ipsum ...."],
                    selected: false
                },
                {
                    title: "Mahdi Chavoshi",
                    subjects: ["Lorem ipsum ..."],
                    selected: false
                },
                // Add more cards and subjects as needed
            ],
        };
    },
    methods: {
        selectCard(index) {
            this.cardArray.forEach((card, i) => {
                card.selected = i === index;
            });
        }
    },
}
</script>

<style scoped>
.selected-card{
    background-color: #031528;
}
</style>