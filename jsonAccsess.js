const data=require('./friends.json');
data.friends[0].Name; //access
data.friends[1].Name="Tomal"; //modify
delete data.friends[0].Age; //delete
// we can use json path finder website for complex examples