var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919832219955'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9832219955</label></div> </a> <a href='mailto:ankurchanda198@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Ankurac7'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/9434312967'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/ankur_ac7'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/ankur_ac7/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/ankur-chanda-20759621a/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";

var resumeString = "<img src='images/AnkurChanda'sResume.png' class='AnkurChanda'sResume'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Ankur Chanda's Resume.pdf</label></div><a href='assets/Ankur Chanda's Resume.pdf' download='Ankur_Chanda's_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/place/31,+31,+S+Park+Rd,+Chittaranjan+Colony+6,+Baghajatin+Colony,+Kolkata,+West+Bengal+742306/@22.490264,88.378914,21z/data=!4m6!3m5!1s0x3a027115b0ca2e6f:0x34baf91a88e92b69!8m2!3d22.4901983!4d88.3788722!16s%2Fg%2F11hmyxgmwm?entry=ttu' class='map'></iframe></div><label class='add'><address>32 South Road<br>Santoshpur, Kolkata-700075<br>Kolkata, West Bengal, INDIA</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}
function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}
function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}
function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}
function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}
function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}
function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there,<br><br>My name is <span class='bold'><a class='alink'>Ankur Chanda</a>.</span><br><br>I am a Computer Science Engineering student at <span class='bold'>Institute of Engineering and Management, Kolkata.</span><br><br>I'm enthusiastic about exploring career prospects in the field of Data Science and Machine Learning. I'm keen to engage in discussions regarding job opportunities in this domain.<br><br>Send <span class='bold'>'hello'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "hello":
            sendTextMessage("<span class='sk'>Send keyword to get what you want to know about me.<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science and Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Python<br>Java<br>MATLAB<br>SQL<br></span><br><br>I've experiance with following frameworks :<span class='bold'><br>Jupyter<br>Numpy<br>Pandas<br>Plotly</span><br><br>I use <span class='bold'>Windows 11</span> as daily driver on my HP Laptop 14s<br>OS: Windows<br>Favourite IDE: VSCode, Google Colab</span>");
            break;
        case "education":
            sendTextMessage("I am currently pusuing B.Tech degree in Computer Science and Engineering from Institute of Engineering and Management, Kolkata<br>Passing Year: 2025<br><br>I have completed my Higher Secondary School from Kendriya Vidyalaya Ballygunge<br>Passing Year: 2021<br><br>I have completed my Secondary School from Kendriya Vidyalaya Ballygunge<br>Passing Year: 2019");
            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/ankur_ac7/'><span class='bold'>Ankur Chanda</a></span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Ankurac7'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you.<br>Send 'hello' to know more about usage.");
            }, 2000);
            break;
    }
}
function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}
function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}
function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Let's catch up more on LinkedIn, GitHub and other social medias like Facebook, Instagram. Thank you for visiting my portfolio.";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}
function playSound() {
    audio.play();
}
