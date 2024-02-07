document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

document.addEventListener("DOMContentLoaded", function() {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        document.getElementById(tabname).classList.add("active-tab");
        event.currentTarget.classList.add("active-link");
    }

    function openmenu() {
        document.getElementById("sidemenu").style.right = "0";
    }

    function closemenu() {
        document.getElementById("sidemenu").style.right = "-200px";
    }

    // Add event listeners for tab links
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function() {
            opentab(this.dataset.tab);
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxLEt1tcqksdVCcWEhqdx1vTmQFLbNuRZ5yr_pEs4vXjX3QQZXY-k8xToJG3VT5VJ1c/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully!";
                setTimeout(function(){
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const githubToken = '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';
    const apiUrl = 'https://api.github.com/repos/Benjameabi/benjameabi.github.io/contents/foocoding/homeworks';

     // Function to create a folder card
    function createFolderCard(folder) {
    const folderList = document.getElementById('folder-list');

    const folderElement = document.createElement('a'); // Change this to <a> element for clickable behavior
    folderElement.classList.add('folder-link'); // Add a class for styling
    folderElement.href = folder.html_url; // Set the link's href attribute to the folder's HTML URL

    const folderIcon = document.createElement('i');
    folderIcon.classList.add('fas', 'fa-folder'); // Add classes for the folder icon

    const folderName = document.createElement('span');
    folderName.textContent = folder.name;

    folderElement.appendChild(folderIcon);
    folderElement.appendChild(folderName);

    folderList.appendChild(folderElement);

    // Add event listener to handle clicks on the folder link
    folderElement.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.open(folder.html_url, '_blank'); // Open the folder URL in a new tab
 });
}

    // Fetch contents of the 'homeworks' folder from GitHub API
    fetch(apiUrl, {
         headers: {
             'Authorization': `token ${githubToken}`,
             'Accept': 'application/vnd.github.v3+json'
  }
})
     .then(response => response.json())
     .then(data => {
     // Create folder cards
     data.forEach(item => {
       if (item.type === 'dir') {
         createFolderCard(item);
    }
  });
})
     .catch(error => {
     console.error('Error fetching folder contents:', error);
});

});


