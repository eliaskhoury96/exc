const posts = [
    
        { name: "Uncle jerome", text: "Happy Birthday kido!"} ,
         {name: "BFF Charlene", text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD"} ,
         {name: "Old High School Teacher", text: "Hey ace, have a good one."} ,
   
];


   const addPost = function () {
    const newName = $('#Na').val();
    const newText = $('#Bw').val();

    if (newName && newText) {
      posts.push({ name: newName, text: newText });
      render(); 
    }

    
    $('#Na').val('');
    $('#Bw').val('');
  }




   