// function $(id) {
//     let x = document.getElementById(id);
//     return x;
// }

// $('wrapper').innerHTML = '<h1>Yay for jQuery</h1>';

//document.getElementById('wrapper');
// $('#wrapper');

// document.getElementById('wrapper').innerHTML = '<h1>Hello World</h1>';
// $('#wrapper').html('<h1 class="title">Hello World</h1>');

// document.getElementById('wrapper').textContent;
// $('.title').text();

// document.querySelector('.title').innerText = 'I changed the text';
// $('.title').text('Set the text content');

// document.querySelector('.title').classList.add('red');
// $('.title').addClass('red');

// document.querySelector('.title').style.display = 'none';
// $('.title').hide();
// $('.title').show();
// $('.title').toggle();

// document.querySelector('.title').addEventListener('click', function() {
//     if (document.body.classList.contains('bg-gray')) {
//         document.body.classList.remove('bg-gray');
//     }
//     else {
//         document.body.classList.add('bg-gray');
//     }
// })

// $('.title').click(function(){
//     $('body').toggleClass('bg-gray');
// })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// $.ajax({ url: 'https://jsonplaceholder.typicode.com/users' })
//     .done(users => console.log(users))
//     .fail(err => console.log(err))
    
// function addUsers(users) {
//     for (i = 0; i < users.length; i++) {
//         let newUser = '<div class="card">';
//         newUser += '<h3>' + users[i].name + '</h3>';
//         newUser += '<p>' + users[i].email + '</p>';
//         newUser += '<p>' + users[i].phone + '</p>';
//         newUser += '</div>';
//         $('#wrapper').append(newUser);
//     }
// }
