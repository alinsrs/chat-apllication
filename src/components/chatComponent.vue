<template>
    <div class="card-container">
        <v-card
                v-for="(card, index) in chatArray"
                :key="index"
                :class="{'my-pm': card.me, 'friend-pm': !card.me}"
                class="mb-3"
                style="border-radius: 0"
        >
            <div>
                <v-card-title> {{ card.title }}</v-card-title>
            </div>

            <div>
                <v-card-text> {{ card.subject }}</v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "chatComponent",
    data() {
        return {
            chatArray: [
                {
                    title: 'Ali Naseri',
                    subject: 'note number 1',
                    me: true,
                },
                {
                    title: 'Mahdi Chavoshi',
                    subject: 'note number 2',
                    me: false
                },
                {
                    title: 'Ali Naseri',
                    subject: 'note number 3',
                    me: true,
                },
                {
                    title: 'Ali Naseri',
                    subject: "note number 4",
                    me: true,
                },
                {
                    title: 'Mahdi Chavoshi',
                    subject: 'note number 5',
                    me: false
                }
            ]
        }
    },
    computed: {
        ifMe(index) {
            this.chatArray.forEach((card, i) => {
                card.me = i === index;
            });
        }
    }
}
</script>

<style scoped>

*{

}

.card-container {
 }

.my-pm {
    background-color: white;
    color: #0B1620;
    width: 350px;
    text-align: left;
    margin-left: 20px;
}

.friend-pm {
    background-color: #483D8B;
    color: white;
    text-align: right;
    width: 350px;
    margin-left: auto;
    margin-right: 25px;
}


</style>