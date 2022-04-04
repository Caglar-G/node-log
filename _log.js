const util = require('util');
const _colors = require('colors');

module.exports = class LOG {


    constructor(TAG,DosyaYaYaz=false)
    {
        
        //this.setupTerminalListener();
        this.tag = TAG;
        this.colors = _colors;
        this.colors.setTheme({
            info: 'bgGreen',
            help: 'cyan',
            warn: 'yellow',
            success: 'green',
            error: 'red'
          });

        //this.DosyayaYaz("--------------Sistem Başladı------------");
    }
    error(data,detay=false)
    {
        this.Yaz(data,"error",detay);
        //this.DosyayaYaz("Error : " + data);
    }
    success(data,detay=false)
    {
        this.Yaz(data,"success",detay);
       // this.DosyayaYaz("Success : " + data);
    }
    warn(data,detay=false)
    {
        this.Yaz(data,"warn",detay);
        //this.DosyayaYaz("Warn : " + data);
    }
    info(data,detay=false)
    {
        this.Yaz(data,"info",detay);
    }
    log(data,detay=false)
    {
        this.Yaz(data,"info",detay);
    }
    ozel(data,detay=false)
    {
        this.Yaz(data,"ozel",detay);
    }
    Yaz(data,tur,detayli = false)
    {
        
        if(detayli == true )
        {
            data = util.inspect(data, false, null, true);
        }
        
        switch (tur) {
            case "error":
                data = `[${this.tag}] . [ERROR] . ${data}`;
                data = data.error;
            break;
            case "success":
                data = `[${this.tag}] . [SUCCESS] . ${data}`;
                data = data.success;
            break;
            case "warn":
                data = `[${this.tag}] . [WARN] . ${data}`;
                data = data.warn;
            break;
            case "info":
                data = `[${this.tag}] . [INFO] . ${data}`;
                data = data.help;
            break;
            case "ozel":
                data = `[${this.tag}] . [HTTP] . ${data}`;
                data = data.bgMagenta;
            break;
        
            default:
                data = `[${this.tag}] . ${data}`;
                break;
        }


        console.log(data);

        
    }
    DosyayaYaz(data)
    {
        const fs = require('fs');

  

        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let hours = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let seconds = date_ob.getSeconds();
        let mili = date_ob.getMilliseconds();

        var FileName = (year + "-" + month + "-" + date);
        var dd = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ":" +mili);

        try {
            fs.appendFile('LOG/'+FileName+".txt", dd+"---"+data+"----"+this.Where+"\n", function (err) {
                if (err) throw err;
                
            });
        } catch (error) {
            console.log("LOG ERROR".error);
        }
        

    }


   


}




  
