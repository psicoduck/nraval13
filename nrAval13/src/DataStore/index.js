
/*
const sqlite3 = require('sqlite3')


let db = new sqlite3.Database("./mydb.sqlite3", (err) => { 
  if (err) { 
      console.log('Error when creating the database', err) 
  } else { 
      console.log('Database created!') 
      // Put code to create table(s) here 
      createTable()
  } 
})

const createTable = () => {
  console.log("create database table contacts");
  db.run("CREATE TABLE IF NOT EXISTS contacts(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",  insertData);
}

const insertData = () =>{
  console.log("Insert data")
  db.run('INSERT INTO contacts (name) VALUES (?)', ["contact 001"]);
}

read = () => {
  console.log("Read data from contacts");
  db.all("SELECT rowid AS id, name FROM contacts", function(err, rows) {
      rows.forEach(function (row) {
          console.log(row.id + ": " + row.name);
      });
  });
}

db.close(); 
 

 */


import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Button } from 'react-native';  
import { TextInput } from 'react-native-gesture-handler';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'inspecao.db' });

import {InspecaoExterna1} from '../pages/InspecaoExterna1';
import {InspecaoExterna2} from '../pages/InspecaoExterna2';
import {InspecaoExterna3} from '../pages/InspecaoExterna3'; 
import {InspecaoExterna4} from '../pages/InspecaoExterna4';  

/* 7 VARIAVEIS USADAS PARA TESTE:
INSPECAOEXTERNA1:viacirculacao, selectedescada
INSPECAOEXTERNA2:selectedValuese, selectedValuecds
INSPECAOEXTERNA3:selectedValuepur, selectedValuemdn
INSPECAOEXTERNA4:selectedValuedc
*/

const DataStore = () => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='externa_items'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS externa_items', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS externa_items(vaso_id INTEGER PRIMARY KEY AUTOINCREMENT,viacirculacao VARCHAR(20), selectedescada VARCHAR(20), selectedValuese VARCHAR(20), selectedValuecds VARCHAR(20), selectedValuepur VARCHAR(20), selectedValuemdn VARCHAR(20), selectedValuedc VARCHAR(20))',
              []
            );
          }
        }
      );
    });
  }, []);

  const register_vaso = () => {
    db.transaction(function (tx) {
        tx.executeSql(
        'INSERT INTO externa_items (viacirculacao, selectedescada, selectedValuese, selectedValuecds, selectedValuepur, selectedValuemdn, selectedValuedc) VALUES (?,?,?,?,?,?,?)',
        [InspecaoExterna1.viacirculacao, InspecaoExterna1.selectedescada, InspecaoExterna2.selectedValuese, InspecaoExterna2.selectedValuecds, InspecaoExterna3.selectedValuepur, InspecaoExterna3.selectedValuemdn, InspecaoExterna4.selectedValuedc],
        (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
                console.log("coluna adicionada");
            } else console.log('Registration Failed');
        }
        );
    }); 
    }

// fazer a função de retornar a tabela. 
  const [flatListItems, setFlatListItems] = useState([]);

    useEffect(() => {
        db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM externa_items',
            [],
            (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
                temp.push(results.rows.item(i));
            setFlatListItems(temp);
            }
        );
        });
    }, []);

    const listViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 0.2,
              width: '100%',
              backgroundColor: '#808080'
            }}
          />
        );
      };

    const listItemView = (item) => {
        return (
          <View
            key={item.vaso_id}
            style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>viacirculacao: {item.viacirculacao}</Text>
            <Text>selectedescada: {item.selectedescada}</Text>
            <Text>selectedValuese: {item.selectedValuese}</Text>
            <Text>selectedValuecds: {item.selectedValuecds}</Text>  
            <Text>selectedValuepur: {item.selectedValuepur}</Text>
            <Text>selectedValuemdn: {item.selectedValuemdn}</Text>
            <Text>selectedValuedc: {item.selectedValuedc}</Text>   
          </View>
        );
      };

//deletar um item da tabela
  const [inputUserId, setInputUserId] = useState('');

  const deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  externa_items where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            console.log('apagado com sucesso');
          } else {
            console.log('Please insert a valid User Id');
          }
        }
      );
    });
  };


  return ( 
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}></View> 
        <Text> Efetuando teste do via circulacao  </Text>
        <Text> Efetuando teste do escada nome  </Text>


    <Button //botão que chama a funcao ir para a pg inspecao externa 1
    title="Fazer o teste de criação - homescreen"
    onPress={ DataStore }
    />

    <Button //botão que chama a funcao ir para a pg inspecao externa 1
    title="Fazer o teste de registro"
    onPress={ register_user }
    />

    <FlatList
        data={flatListItems}
        ItemSeparatorComponent={listViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => listItemView(item)}
    />

    <TextInput placeholder="insira o id" onChangeText={
        (inputUserId) => setInputUserId(inputUserId)
    } />
    <Button //botão que chama a funcao ir para a pg inspecao externa 1
    title="Deletar usuario"
    onPress={ deleteUser }
    />

    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
  );
};

export default DataStore;