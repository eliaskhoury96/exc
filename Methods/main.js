
        

/*let users = [
    {"id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "company": {"name": "Romaguera-Crona"}},
    {"id": 2, "name": "Ervin Howell", "username": "Antonette", "email": "Shanna@melissa.tv", "company": {"name": "Deckow-Crist"}},
    {"id": 3, "name": "Clementine Bauch", "username": "Samantha", "email": "Nathan@yesenia.net", "company": {"name": "Romaguera-Jacobson"}},
    {"id": 4, "name": "Patricia Lebsack", "username": "Karianne", "email": "Julianne.OConner@kory.org", "company": {"name": "Robel-Corkery"}},
    {"id": 5, "name": "Chelsey Dietrich", "username": "Kamren", "email": "Lucio_Hettinger@annie.ca", "company": {"name": "Keebler LLC"}},
    {"id": 6, "name": "Mrs. Dennis Schulist", "username": "Leopoldo_Corkery", "email": "Karley_Dach@jasper.info", "company": {"name": "Considine-Lockman"}},
    {"id": 7, "name": "Kurtis Weissnat", "username": "Elwyn.Skiles", "email": "Telly.Hoeger@billy.biz", "company": {"name": "Johns Group"}},
    {"id": 8, "name": "Nicholas Runolfsdottir V", "username": "Maxime_Nienow", "email": "Sherwood@rosamond.me", "company": {"name": "Abernathy Group"}},
    {"id": 9, "name": "Glenna Reichert", "username": "Delphine", "email": "Chaim_McDermott@dana.io", "company": {"name": "Yost and Sons"}},
    {"id": 10, "name": "Clementina DuBuque", "username": "Moriah.Stanton", "email": "Rey.Padberg@karina.biz", "company": {"name": "Hoeger LLC"}}
]
*/
/*$.get("https://jsonplaceholder.typicode.com/users", function(users){
  const mappedData = users.map(user => ({
    email: user.email,
    companyName: user.company.name
}));

console.log(mappedData);
})
*/


/*$.get("https://jsonplaceholder.typicode.com/users", function(users) {
    const usersWithUsernameStartingWith5 = users.filter(user => user.username.startsWith('5'));
     console.log(usersWithUsernameStartingWith5);
});

*/




/*$.get("https://jsonplaceholder.typicode.com/users", function(users) {
const filteredNames = users
  .map(user => user.name)
  .filter(name => name.startsWith('C'));

console.log(filteredNames);
})

*/
/*$.get("https://jsonplaceholder.typicode.com/users", function(users) {
const allInSouthChristy = users.every(user => user.address && user.address.city === 'South Christy');

console.log(allInSouthChristy);
})
*/




/*$.get("https://jsonplaceholder.typicode.com/users", function(users) {
    const userWithSuite950 = users.find(user => user.address.suite === 'Apt. 950');

if (userWithSuite950) {
  console.log(userWithSuite950.company.name);
} else {
    console.log('User with suite Apt. 950 not found.');
}
})
*/

$.get("https://jsonplaceholder.typicode.com/users", function(users) {
    function logUserInfo(user) {
        console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
      }
      
      users.forEach(logUserInfo);
    })      