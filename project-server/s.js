const bcrypt = require('bcryptjs');

// Assuming you have the normal password and hashed password
const normalPassword = '123456789'; // This is the plaintext password
const hashedPassword = '$2a$10$q0hHRPDC/bzxolMir5VUCeNtMt0pa2697I0GWXT4ryMJEYpfdqagG'; // This is the hashed password
async function a(){

    const comparePasswords = async (normalPassword, hashedPassword) => {
        try {
            const isMatch = await bcrypt.compare(normalPassword, hashedPassword);
            return isMatch;
        } catch (err) {
            console.error('Error comparing passwords:', err);
            return false; // Return false in case of an error
        }
    };
    const passwordsMatch = await comparePasswords(normalPassword, hashedPassword);
    console.log('Passwords match:', passwordsMatch); 
}
a();


