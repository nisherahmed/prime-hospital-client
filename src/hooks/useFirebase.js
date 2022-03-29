import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";

// Step - 1:
// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // Step - 1:
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    // user is admin or not
    const [admin, setAdmin] = useState(false);
    // for jwt token
    const [token, setToken] = useState('');

    const auth = getAuth();
    // for google sign in option
    const googleProvider = new GoogleAuthProvider();

    // Step - 1:
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');

            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    // Step - 3:
    // eikhane location and history use hoise private route er jonno
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                // google signIn korar shomoy direct redirect korbe
                const destination = location?.state?.from || '/';
                navigate(destination);
                // 
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Step - 2:
    // observer user state like signout
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        // console.log(idToken);
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        // function return korbo jeno kono kisu dhore na rakhe
        return () => unsubscribe;
    }, [auth])
    // for admin role
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // signout name ta change kore logout dibo 
    // Step - 1:
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }
    // for send registerUser data to Mongodb database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;


// STEP - 2 ##############################################


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Step - 1: $$$$$$ at first fireBase initialize korte hobe initializeFirebase(); then
// ekta  useFirebase function create korbo


// const useFirebase = () => {
//     const [user, setUser] = useState({});
// }


// return {
//     user,

// }


// export default use


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Step - 2: $$$$$$ Then go to docs then Authentication then WEB then Password Authentication


// initialize firebase app

// initializeFirebase();

// const useFirebase = () => {
//     const [user, setUser] = useState({});

//     const auth = getAuth();


//     // ei ta function er likhte hosse karon ei ta onno place theke call korbo tai
//     const registerUser = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 setAuthError('');
//             })
//             .catch((error) => {
//                 setAuthError(error.message);
//                 // ..
//             })
//             .finally(() => setIsLoading(false));
//     }


//     // observer user state

//     return {
//         user,
//         isLoading,
//         authError,
//         registerUser,
//         loginUser,
//         logout,
//     }
// }





// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Step - 3: $$$$$$