document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Benutzer-Datenbank mit individuellem Text
    const users = {
        "admin": {
            password: "admin7379",
            welcomeText: "Willkommen zurück, großer Admin! 👑\nWir wünschen dir einen tollen Tag!"
        },
        "zaynnn": {
            password: "555",
            welcomeText: "Hey Zaynnn! Schön dich zu sehen! 🎵"
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
