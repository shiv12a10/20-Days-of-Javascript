const words = ['BOB', 'MOM', 'TOM', 'BYE', 'WOW', 'CLP', 'WHW', 'QUO', 'EJH', 'JAPAN', 'SMOKE', 'GAS', 'Sweet', 'Yard', 'GFG', 'Stove', 'King', 'Quid', 'Hall', 'Crumbly', 'GEl', 'ill', 'GYD','Dominos' , 'hell' ,'Harry', 'Shiv','USd','Yds','Drd','Yellow','Backend', 'barby' ,'Sweat', 'Chiff','Walk','Sour','Will','tom','Tarun','Fark','Play','Mirror','Hard','Boil','rest','Play','Burn','Meow','Counter','Glass','Napkin','Marry','Win','Mircowave','Dig','India','Pstan','Iran','USA','Spin','Domnc','SOur','Australia','Minor','DKD','GVF','KAJ','OUECN','Queen','DCBH','JWHCD','QPEJD','SCJVB','HJD','JCNX','ZMN'];

function getPassword() {
    const chars = '0123456789/!@#$%^&*';
    const clength = chars.length;
    let password = ''; 

    while(password.length < 20) {
        password = password.concat(randomWord(chars.length));
        password = password.concat(chars[randomNumber(clength)]);
    }
    password = password.substring(0, 16);
    document.getElementById('password').value = password;
}

function randomNumber(e) {
    return Math.floor(Math.random()* e);
}

function randomWord() {
    const number =randomNumber(words.length);
    return words[number]; 
}