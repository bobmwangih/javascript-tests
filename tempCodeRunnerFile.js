   function valider(pin){
            return /^(\d{4}|\d{6})$/g.test(pin);
        }
        console.log(valider(4423));
