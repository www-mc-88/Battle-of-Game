document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Benutzer-Datenbank mit individuellem Text
    const users = {
        "bboyj": {
            password: "bboyj",
            welcomeText: "Willkommen zurück bboyj, du hast die fast höste scherheitz stufe sicherheitz stufe heißt du kannst alle codes sehen auser host\nplayer:73958\npremium:62548\nsup:73469\nmod:36597\nblider:98399\nadmin.74657\nowner:73955\nHost:keine berechtigung"
        },
        "julianboss77": {
            password: "77",
            welcomeText: "Willkommen zurück zaynnn, du hast eine nutzerdifinirte sicherheitz stufe und du hast nur zugrif auf player,sub und bilder\nplayer:73958\npremium:keine berechtigung\nsup:73469\nmod:keine berechtigung\nblider:98399\nadmin.keine berechtigung\nowner:keine berechtigung\nHost:keine berechtigung"
        },
        "janisbln": {
            password: "2014",
            welcomeText: "Willkommen zurück janisbln, du hast die höste sicherheitz stufe heißt du kannst alle codes sehen\nplayer:73958\npremium:62548\nsup:73469\nmod:36597\nblider:98399\nadmin.74657\nowner:73955\nHost:84796"
        }
    };
    
    if (username === "" || password === "") {
        document.getElementById("errorMessage").textContent = "Bitte füllen Sie alle Felder aus.";
    } else {
        // Prüfung ob Benutzername existiert und Passwort stimmt
        if (users[username] && users[username].password === password) {
            document.getElementById("errorMessage").textContent = "";
            document.getElementById("successMessage").textContent = users[username].welcomeText; 
            
            // Formular-Container entfernen
            document.getElementById("loginContainer").remove();
        } else {
            document.getElementById("errorMessage").textContent = "Benutzername oder Passwort ist falsch.";
        }
    }
});
