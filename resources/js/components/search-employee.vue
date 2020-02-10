<template>
    <div class="container mx-auto text-center justify-center items-center pt-10">
        <form class="flex flex-col md:flex-row justify-center text-center items-center" @submit.prevent="onSubmit">
            <input type="text"
                   v-model="value"
                   name="search"
                   v-validate="'required'"
                   class="h-8 md:w-1/3 border rounded search-color"
                   placeholder="Search for an Employee"
            >
            <div>
                <select class="h-8 border rounded mt-2 md:mt-0 md:ml-2" v-model="criteria">
                    <option value="name" selected> Name</option>
                    <option value="phone"> Phone</option>
                    <option value="department"> Department</option>
                </select>
                <button type="submit" class="btn btn-blue ml-1" :disabled="errors.has('search')"> Search</button>
            </div>
        </form>
        <div class="pt-2">
            <span v-show="errors.first('search')" class="text-red-500">{{ errors.first('search') }}</span>
            <span v-show="errorMsg" class="text-red-500">{{errorMsg}}</span>
        </div>
        <div class="md:w-2/3 search-box" v-show="fetching">
            <div class="w-1/4"><span>Name</span></div>
            <div class="w-1/4"><span>Phone</span></div>
            <div class="w-1/4"><span>Department</span></div>
            <div class="w-1/4 text-right md:text-left"><span>Email</span></div>
        </div>
        <div
            v-for="employee in employees"
            class="md:w-2/3 flex-col md:flex-row search-box"
            v-show="fetching">
            <div class="md:w-1/4"><span>{{employee.name}}</span></div>
            <div class="md:w-1/4"><span>{{employee.phone}}</span></div>
            <div class="md:w-1/4"><span>{{employee.department}}</span></div>
            <div class="md:w-1/4 truncate"><span>{{employee.email}}</span></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "search-employee",
        data() {
            return {
                value: '',
                criteria: 'name',
                employees: {},
                fetching: false,
                errorMsg: '',
            }
        },
        mounted() {
        },
        methods: {
            onSubmit() {
                this.errorMsg = '';
                this.fetching = false;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.get(location.origin, {
                            params: {
                                searchValue: this.value,
                                criteria: this.criteria,
                            }
                        })
                            .then(response => {
                                this.fetching = true;
                                this.employees = response.data.results;
                            })
                            .catch(error => {
                                this.errorMsg = error.response.data.error;
                            });
                    }
                })
            }

        },
    }
</script>

<style scoped>

</style>
