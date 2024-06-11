const getUrl = 'https://66681676f53957909ff67af8.mockapi.io/users/Students';

async function getData() {
  try {
    const response = await fetch(getUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data); // Log the fetched data
    let name =document.getElementById("exampleInputEmail1");
    let id=document.getElementById("exampleInputPassword1");
    name.value=data[4].name;
    id.value=data[4].id;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

getData();


const postUrl = 'https://jsonplaceholder.typicode.com/posts';

async function postData() {
  try {
    const response = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data); // Log the posted data
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

postData();



const putUrl = 'https://jsonplaceholder.typicode.com/posts/1';

async function updateData() {
  try {
    const response = await fetch(putUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    console.log(data); // Log the updated data
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

updateData();



const deleteUrl = 'https://jsonplaceholder.typicode.com/posts/1';

async function deleteData() {
  try {
    const response = await fetch(deleteUrl, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    console.log('Deleted successfully'); // Log the success message
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

deleteData();


