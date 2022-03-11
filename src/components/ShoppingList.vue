<template>
  <div>
    <h2>Här är din shoppinglista!</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{item}} - <button :id="'remove-'+index" @click="removeItem(index)">Ta bort föremål</button></li>
    </ul>
    <br><br>
    <input id="newItem" type="text" v-model="newItem">
    <button id="addItem" @click="addItem()">Lägg till föremål</button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  data() {
    return {
      newItem: '',
      items: []
    }
  },
  mounted() {
    const list = localStorage.getItem('shoppingList');
    this.items = list ? list.split(',') : [];
  },
  methods: {
    addItem() {
      this.items.push(this.newItem.replace(',',''));
      this.newItem = '';
      this.save();
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.save();
    },
    save() {
      localStorage.setItem('shoppingList', this.items);
    }
  }
}
</script>

<style>
</style>
