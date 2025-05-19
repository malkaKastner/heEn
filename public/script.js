let arr = [
    {
        en: 'red',
        he: 'אדום'
    },
    {
        en: 'green',
        he: 'ירוק'
    },
    {
        en: 'pink',
        he: 'ורוד'
    },
    {
        en: 'yellow',
        he: 'צהוב'
    },
    {
        en: 'blue',
        he: 'כחול'
    }
]

function mix() {
    //לולאה 20 פעמים ביצוע החלפות
    for (let index = 0; index < 20; index++) {
        //הגרלת 2 מספרים בטווח המערך
        let num1 = Math.floor(Math.random() * arr.length)
        let num2 = Math.floor(Math.random() * arr.length)
        //החלפה
        let temp = arr[num1]
        arr[num1] = arr[num2]
        arr[num2] = temp
    }
}
//הפונקציה מקבלת פרמטר האם זו יצירת ראשונה או שניה
function create(num) {
    let sec = document.getElementsByTagName('section')[num]
    arr.forEach(x => {
        //1. לייצר אלמנט - תגית
        let div = document.createElement('div')
        //2. מאפיינים
        //בדיקה איזה מאפיין להציג
        if (num == 0)
            div.innerText = x.en
        else
            div.innerText = x.he
        //עד עכשיו השתמשנו במאפיינים מובנים
        //שהשפיעו על הנראות של התגית
        //ניתן להוסיף מאפיינים משלנו שלא ישפיעו על הנראות
        //אלא רק ישמרו לנו נתונים
        //data- שם מאפיין חייב להתחיל במילה
        //ניתן לתת כמה מאפיינים שרוצים
        //setAttribute הוספת מאפיין עי הפונקציה 
        //נוסיף לכל תגית את התרגום שלה
        if (num == 0)
            div.setAttribute('data-translate',x.he)
        else
            div.setAttribute('data-translate',x.en)
        //בנוסף נשמור את הצבע באנגלית
        div.setAttribute('data-color',x.en)

        //3. הוספה למסך
        sec.appendChild(div)
        //הוספת ארוע לחיצה
        div.addEventListener('click', play)
    }
    )
}
//זימון הפונקציות
function start() {
    mix()
    create(0)
    mix()
    create(1)
}

let before = null
function play() {
    //בכל פונקציה המזומנת עי ארוע מהמסך
    //event יש משתנה בשם 
    //המכיל את כל פרטי הארוע
    //לכל ארוע הפרטים שלו
    console.log(event);
    // type - סוג הארוע
    if (event.type == 'click')
        console.log('עי עכבר');
    else
        console.log('מקלדת');

    //גישה לתגית שהפעילה את הארוע
    // srcElement - מיושן
    //target - התגית עליה היה הארוע גם אם הארוע לא משויך אליה
    //currentTarget - התגית עליה היה הארוע ובשלה הופעלה הפונקציה
    console.log(event.target);
    console.log(event.currentTarget);
    //כאשר יש את התגיעת בידיים ניתן לגשת לכל המאפיינים שלה
    let d = event.currentTarget
    //בדיקה האם מדובר בלחיצה ראשונה
    if (before == null)
    {
        before = d
        //class - היא מילה שמורה
        //ולכן כדי להוסיף עיצוב עי מחלקה
        //className נשתמש ב
        d.className='clicked'
    } 
    else
    {
        //בדיקה בין 2 הכרטיסים עליהם לחצו
        //ישנה בעיה - הערכים אינם זהים
        //ולכן לא ניתן לבצע השוואה
        //אם שמרנו מידע נוסף על התגית
        //getAttribute נוכל לשלוף אותו עי הפונקציה
        //ההשוואה תהיה המילה שעל הכרטיס הנוכחי
        //עם התרגום של הכרטיס הקודם
        if(d.innerText==before.getAttribute('data-translate'))
        {
            //צביעת הכרטיסים
            let c=d.getAttribute('data-color')
            d.style.backgroundColor=c
            before.style.backgroundColor=c
        }
        else
        alert('err')
        before.className=''
        before=null
    }
    





}
