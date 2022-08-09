window.onload=function(){
  var option = document.getElementById('range_value');
  var a = [];
  for (var i = 3; i <= size.length; i++) {
    a[i] = new Option("單元"+i,i);
    option.options.add(a[i]);
  }
  random();
}

var question; //問題
var range; //範圍 U
var words; //單字
var mode; //模式
var counts; //計算題目出現數量
var rp_detect = []; //偵測是否出現過
var size = [0,0,51,48,42,47,44,46,42,43];

function random(){
  reset();
  if (counts == size[Number(range)-1]){
    window.alert("遊戲結束，請重新開始！")
  }
  else {
    question = Math.floor(Math.random()*(size[Number(range)-1]+1));
    if (mode=="unrepeat"){
      if (rp_detect[question] == 1){
        while (rp_detect[question] != 0) {
          question = Math.floor(Math.random()*(size[Number(range)-1]+1));
        }
      }
    }
    console.log(mode);
    document.getElementById('title').innerText  = words[Number(range)-1][question][0];
  }
}

function check() {
  var ans = document.getElementById('answer').value;
  var topic = words[Number(range)-1][question][1];
  if (ans == topic){
    document.getElementById("correct").style.color = "green";
    document.getElementById('correct').innerText  = "答案正確！";
    document.getElementById('incorrect_explain').innerText  = "下一題";
    document.getElementById('incorrect_explain').classList.add("active");
    rp_detect[question] = 1;
    counts += 1;
    explain();
  }
  else{
    document.getElementById("correct").style.color = "red";
    document.getElementById('correct').innerText  = "答案錯誤！";
    document.getElementById('answer').value  = "";
    document.getElementById('incorrect_explain').innerText  = "看解析";
    document.getElementById('incorrect_explain').classList.add("active");
  }
}

function explain(){
  document.getElementById('explain').classList.add("active");
  document.getElementById('word').innerText  = words[Number(range)-1][question][1];
  document.getElementById('chinese').innerText  = words[Number(range)-1][question][2];
  document.getElementById('example').innerText  = words[Number(range)-1][question][3];
}

function next() {
  var ans = document.getElementById('answer').value;
  var topic = words[Number(range)-1][question][1];
  if (ans == topic){
    random();
  }
  else{
    explain();
  }
}

function choose(){
  range = document.getElementById('range_value').value;
  mode = document.getElementById('mode_value').value;
  for (var i = 0; i < size[Number(range)-1]; i++) {
    rp_detect[i] = 0;
  }
  counts = 0;
  random();
}

function reset(){
  document.getElementById('answer').value  = "";
  document.getElementById('correct').innerText  = "";
  document.getElementById('explain').classList.remove("active");
  document.getElementById('incorrect_explain').classList.remove("active");
}

words = [
        //U1
          [
            ["暫無","error","error","error"],
          ],
        //U2
          [
            ["暫無","error","error","error"],
          ],
        //U3
          [
            ["n.專家","specialist","名詞：專家\n名詞：專科醫師","He is a specialist in modern art.\n他是現代藝術的專家。"],
            ["v.專攻、專門研究","specialize","動詞：專攻\n動詞：專門研究","He specializes in the poets of the 17th century.\n他專門研究十七世紀的詩人。"],
            ["n.專長","specialty","名詞：專長\n名詞：特產、特製品","His specialty is French cuisine.\n他的專長是法國料理。"],
            ["v.重新開始、n.履歷表","resume","動詞：重新開始\n名詞：履歷表\n名詞：摘要","She hopes to resume her work after the baby is born.\n她希望在孩子出生後重回職場。"],
            ["v.使有資格","qualify","動詞：使有資格","His legal experience qualifies him to be a judge.\n他的法學經歷使他有資格擔任法官。"],
            ["n.企業","enterprise","名詞：企業","He is the CEO of a large international enterprise.\n他是一家大型國際企業的執行長。"],
            ["n.企業家","enterpreneur","名詞：企業家","He is a truly ambitious entrepreneur.\n他真的是一名很有企圖心的企業家。"],
            ["n.觀察員","observer","名詞：觀察員","She attended the meeting as an observer.\n她以觀察員的身分出席會議。"],
            ["n.索引、指數","index","名詞：索引\n名詞：指標\n名詞：指數\n動詞：將~編入索列","The index is printed in double columns.\n這份索引以雙欄印製。"],
            ["adj.先前的、在前","prior","形容詞：先前的\n副詞：在前\n名詞：修道院院長","The course requires prior knowledge of Arabic.\n這門課需要先具備阿拉伯文的知識。"],
            ["n.背景、布景","setting","名詞：背景、布景\n名詞：機器的調節設定","The switch has three settings: on, auto, and off.\n這個開關有三個設定:開、自動與關。"],
            ["n.崇拜、禮拜","worship","名詞：崇拜、禮拜\n名詞：崇敬\n動詞：崇拜、景仰","The church is a place of worship.\n教堂是禮拜的場所。"],
            ["n.布料","fabric","名詞：布料","This fabric is similar to cotton, but it's a lot lighter.\n這種布料與棉質相似,但重量更輕。"],
            ["n.建築師","architect","名詞：建築師","The museum was designed by a famous architect.\n這棟博物館是由一位知名建築師所設計。"],
            ["n.建築設計、建築學","architecture","名詞：建築設計、建築學","The opera house is a fine example of Gothic architecture.\n這座歌劇院是歌德式建築的典範。"],
            ["conj.然而","whereas","連接詞：然而","Some people like sashimi, whereas others hate it.\n有些人喜歡生魚片,有些人討厭。"],
            ["n.比率","ratio","名詞：比率","The ratio of students to teachers is 10:1.\n學生與老師的比例是10比1。"],
            ["adv.無處、不知何處","nowhere","副詞：無處、沒有地方\n形容詞：不知何處","I have nowhere else to go.\n我無處可去。"],
            ["n.靜脈、葉脈","vein","名詞：靜脈\n名詞：葉脈","What did he inject into my vein? Is it going to kill me?\n他在我的靜脈注射什麼?會置我於死地嗎?"],
            ["n.住宅","residence","名詞：住宅","There are some nice residences for sale in this area.\n這一區有幾棟不錯的住宅要出售。"],
            ["n.居民、adj.居留的","resident","名詞：居明\n名詞：住院醫師\n形容詞：居留的\n形容詞：駐在的","The plan has been fiercely opposed by local residents.\n這項計畫遭到當地居民的激烈反對。"],
            ["adj.住宅的","residential","形容詞：住宅的","There are no shops or supermarkets in residential areas.\n住宅區內沒有商店或超市。"],
            ["v.維持、支撐","sustain","動詞：維持、支撐\n動詞：蒙受（損害等）","There is enough air to sustain life in the space station.\n太空站有足夠的空氣維持生命。"],
            ["adj.環保永續的、可持續的","sustainable","形容詞：環保永續的\n形容詞：可持續的、能長期保持的","One of the sustainable energy solutions is solar energy.\n太陽能是環保永續的能源之一。"],
            ["n.動機","motive","名詞：動機","What was his motive for killing his brother?\n他殺死哥哥的動機是什麼？"],
            ["n.衝動","impluse","名詞：衝動","After the exam, I had an impluse to shout.\n考試結束後，我有股想要大叫的衝動。"],
            ["adj.神聖的","sacred","形容詞：神聖的","Cow are sacred animals in India.\n牛在印度是神聖的動物。"],
            ["adj.驚人的、不凡的","extraordinary","形容詞：驚人的、不凡的","Since he was little, he has shown his extraordinary talent.\n他自幼就展現驚人天賦。"],
            ["v.使停學、懸掛","suspend","動詞：使停學、停職、停賽\n動詞：懸掛","She was suspended from school for stealing.\n她因為偷竊遭停學處分。"],
            ["n.對手","opponent","名詞：對手","He beat his opponent with little difficulty.\n他輕而易舉地擊敗對手。"],
            ["n.反對","opposition","名詞：反對\n名詞：反對黨","The tax reform met with strong opposition.\n品品稅務改革遭逢強烈的反對。"],
            ["n.多愁善感","sentiment","名詞：多愁善感\n名詞：感情、情緒、感性","There is no place / time for sentiment in business or in war!\n商場或戰場絕不容許感情用事。"],
            ["adj.容易感傷的","sentimental","形容詞：容易感傷的\n形容詞：情感的、情緒的","Autumn rain and fallen leaves often make me sentimental.\n秋雨和落葉常令我感傷。"],
            ["n.前廊","porch","名詞：前廊","She sits on the front porch waiting.\n她坐在前廊等待。"],
            ["v.變換、轉換","convert","動詞：變換、轉換\n動詞：使改變宗教信仰","They converted the guest room into a study.\n他們將客房改作書房。"],
            ["n.變換、轉變","converison","名詞：變換、轉變\n名詞：宗教信仰的改變","The converison of his farmland to commercial use helped him make a fortune.\n他的農地變更為商業用地，讓他日入斗金。"],
            ["adj.模糊的","vague","形容詞：模糊的","I have only a vague memory of my late grandfather.\n對於已逝的祖父我只有很模糊的印象。"],
            ["v.攀附","cling","動詞：攀附\n動詞：堅守、緊抓","Baby koalas cling to their mothers most of the time.\n無尾熊寶寶大部分時間都黏在媽媽身上。"],
            ["v.承認、致謝","acknowledge","動詞：承認\n動詞：致謝","Those who never acknowledge their mistakes will not make progress.\n不願承認錯誤的人不會進步。"],
            ["n.承認、感謝","acknowledgement","名詞：承認、供認\n名詞：感謝","He made no acknowledgement of any rule violation.\n他不承認任何違規情事。"],
            ["adj.海洋的、海軍的","marine","形容詞：海洋的\n形容詞：海軍的\n名詞：海軍陸戰隊隊員","Water pollution poses a serious threat to the marine life.\n水汙染對海洋生物造成嚴重的威脅"],
            ["n.貯存","storage","名詞：貯存","There is a large storage room in the basement.\n地下室有一個大儲藏室"],
            ["n.文件","document","名詞：文件\n動詞：以文獻或文件紀錄證明","He was charged with using forged documents.\n他遭指控使用偽造文件。"],
            ["n.紀錄片、文件的","documentary","名詞；紀錄片\n形容詞：文件的\n形容詞：紀錄(片)的","We saw a documentary about the Holocaust.\n我們看了一部關於猶太人大屠殺的紀錄片。"],
            ["v.旋轉、推翻、n.相反","reverse","動詞：逆轉、顛倒\n動詞：(使)倒退\n動詞：推翻、撤銷(決定或判決)\n形容詞：顛倒的、相反的\n名詞：相反","We wish to reverse the process of aging.\n我們希望能逆轉老化過程。"],
            ["adj.範圍廣的、流傳廣的","widespread","形容詞：範圍廣的、流傳廣的","Many people suffer from a widespread disease, asthma.\n許多人罹患一種廣為流傳的疾病—氣喘。"],
            ["v.超過","exceed","動詞：超過","Her excellent performance exceeded my expectations.\n她的優異表現超出我的預期。"],
            ["adj.過量的","excessive","形容詞：過量的","Excessive drinking will do harm to health.\n過度飲酒有害健康。"],
            ["n.(前進拓荒的)邊境","frontier","名詞：(前進拓荒的)邊境\n名詞：(知識或活動的)最新領域","Her parents settled in a frontier town in Minnesota.\n她的父母定居於明尼蘇達州的一座拓荒小城。"],
            ["adv.無庸置疑地","undoubtedly","副詞：無庸置疑地","Alice was undoubtedly the perfect match for Steve.\n無疑地,愛麗絲是史提夫的完美對象。"],
            ["n.標本、樣本","specimen","名詞：標本\n名詞：實例、樣本","She has a large collection of butterfly specimens.\n她收集許多蝴蝶標本。"],
            ["v.堅持繼續、持續","persist","動詞：堅持繼續\n動詞：持續","The journalists persisted in asking him personal mommand motor questions.\n這些記者持續不斷地問他私人問題。"]
          ],
        //U4
          [
            ["n.電路","cricuit","名詞：電路","The electric current flows through the circuit.\n電流隨著電路流動。"],
            ["n.神話故事","myth","名詞：神話故事\n名詞：迷思(廣為流傳的錯誤觀念)","Myths originated in different countries and cultures.\n神話起源於不同國家與文化。"],
            ["adj.狂熱的","enthusiastic","形容詞：狂熱的","You don't seem very enthusiastic about the concert.\n你對這場音樂會似乎不是很熟衷。"],
            ["n.鐵軌","rail","名詞：鐵軌\n名詞：欄杆","They built wooden rails around their backyard.\n他們築起木欄,圍住後院。"],
            ["v.譴責","condemn","動詞：譴責","We condemned him for his violent behavior.\n我們譴責他的暴力行為。"],
            ["n.產量、v.生產","output","名詞：產量\n名詞：輸出\n動詞：生產","The output of the coal mine is 100 million tons per year.\n這座煤礦的產量是每年一億公噸。"],
            ["n.典禮","ceremony","名詞：典禮","The graduation ceremony is usually held in June.\n畢業典禮通常在六月舉行。"],
            ["n.纖維","fiber","名詞：纖維","We can get plenty of fiber from vegetables.\n我們可從蔬菜中取得豐富的纖維。"],
            ["n.集會、聚集","gathering","名詞：集會、聚集","There is a gathering of students in the hall.\n大廳裡有學生的集會。"],
            ["adj.永恆的","eternal","形容詞：永恆的","Many Chinese emperors tried various ways to have eternal life, but all failed.\n許多中國帝王嘗試各種方法追求長生不老,卻都失敗。"],
            ["adj.一定會","bound","形容詞：一定會\n形容詞：前往~的\n動詞：跳躍、跳著跑\n名詞：界限","Your plan is bound to fail.\n你的計畫一定會失敗。"],
            ["n.邊界線","boundary","名詞：邊界線","The boundary between the two countries is still in dispute.\n這兩國之間的國界仍有爭議。"],
            ["adj.農業的","agricultural","形容詞：農業的","The agricultural country has been transformed into lead galancer or to an industrial one,這個農業國家已轉型為工業國家。"],
            ["adj.粗野的、噁心的","gross","形容詞：粗野的、噁心的\n形容詞：總計的\n動詞：獲得~總收入(毛利)\n名詞：總額","Because of his gross language, nobody likes to be around him.\n因他言語粗節,沒人喜歡與他為伍。"],
            ["adj.精巧的、精心準備的","elaborate","形容詞：精巧的、精心準備的\n動詞：詳述","They are planning an elaborate wedding for the prince.\n他們正為王子策劃一場精緻的婚禮。"],
            ["n.部分","fraction","名詞：部分\n名詞：(數學)分數","Only a tiny fraction of taxpayers' money is spent on education.\n納稅人的錢只有一小部分在教育上,"],
            ["v.弄直","straighten","動詞：弄直\n動詞：整理","I can't straighten (up) my legs in a small car.\n我無法在小車子裡將腿伸直。"],
            ["adj.率直的、直白的","straightforward","形容詞：率直的、直白的\n形容詞：淺顯易懂的","He's very straightforward about not wanting kids.\n他直言不想要小孩。"],
            ["n.專利欄","patent","名詞；專利欄\n形容詞：專利的\n動詞：取得專利","He got a lot of patents for his inventions.\n他獲得許多發明的專利。"],
            ["adj.詩的","poetic","形容詞：詩的\n形容詞：有詩意的","The story is written in poetic language.\n這故事以詩的語言書寫。"],
            ["n.妨礙、妨害","interference","名詞：妨礙、妨害\n名詞：干涉\n名詞：干擾","I am opposed to any interference with personal privacy.\n我反對任何妨害個人隱私的行為。"],
            ["n.感應器","sensor","名詞：感應器","Test your smoke sensors regularly to prevent false italiini na alarms from draining batteries.\n定期檢查燈霧感應器,以防電池漏電造成錯誤警報。"],
            ["n.敏感","sensitivity","名詞：敏感\n名詞：感性","The drug will increase patients' sensitivity to light.\n這種藥會增加病人對光的敏感。"],
            ["n.感覺、知覺","sensation","名詞：感覺、知覺\n名詞：轟動、騷動","The disease causes a loss of sensation in the fingers.\n這種疾病會使手指失去知覺。"],
            ["v.強迫","compel","動詞：強迫","The new law compels employers to pay equal pay for equal work.\n新法迫使雇主必須同工給付同酬。"],
            ["v.開始、發動","initiate","動詞：開始、發動\n動詞：領~入門、介紹~參加~\n形容詞：新加入的\n名詞：新加入者","Who initiated the discussion?\n誰發起這個討論?"],
            ["n.倡導、初步計畫","initiative","名詞：倡導、初步計畫\n名詞：進取精神、主動\n形容詞：啟動的、發起的","The peace initiative was welcomed by both sides.\n雙方對於和平的提議都表示歡迎。"],
            ["v.察覺、看出","perceive","動詞：察覺、看出(正式用語)\n動詞：理解、感覺","Dogs can't perceive colors.\n狗無法分辨顏色。"],
            ["n.認知、知覺","perception","名詞：認知、知覺","The internet has changed our perception of the world.\n網際網路改變我們對世界的認知。"],
            ["n.貨運","freight","名詞：貨運\n動詞：裝貨於\n動詞：運輸","The standard delivery is 2 weeks by air freight.n標準運送時間為空運兩週。"],
            ["n.關愛、感情","affection","名詞：關愛、感情","My father never showed us much affection.\n我父親從未對我們表示太多關愛。"],
            ["n.繼承人","heir","名詞：繼承人","He is the only heir to the throne.\n他是王位的唯一繼承人。"],
            ["v.繼承","inherit","動詞：繼承\n動詞：遺傳","Who will inherit the land?\n誰將繼承這塊土地?"],
            ["n.遺產(歷史、文化的)","heritage","名詞：遺產(歷史、文化的)","Chinese people have a rich historical and cultural heritage.\n中國人擁有豐富的歷史與文化遺產。"],
            ["n.宣告","declaration","名詞：宣告","China made a declaration of war against Japan in 1941.\n中國於一九四一年對日宣戰。"],
            ["adj.僵硬的","rigid","形容詞：僵硬的\n形容詞：嚴格的、不容改變的","The new actor seems quite rigid in the film.\n那名新進演員在影片中顯得相當僵硬。"],
            ["adj.憲法的、合乎憲法的","constitutional","形容詞：憲法的、合乎憲法的\n名詞：保健散步","Freedom of speech is one of our constitutional rights.\n言論自由是憲法保障我們的權利之一。"],
            ["v.絆倒","stumble","動詞：絆倒\n名詞：絆倒","She stumbled over his leg and fell over face first.\n她被他的腳絆倒,正臉朝下摔跤。"],
            ["n.木樁、賭注","stake","名詞：木樁\n名詞：(以前的)火刑柱\n名詞：賭注\n動詞：把賭注放在","The priest drove a stake into the vampire's chest.\n牧師將木樁插入吸血鬼的胸膛。"],
            ["v.辯護","plead","動詞：辯護\n動詞：辯稱\n動詞：向某人懇求某事","He hired a lawyer to plead his case.\n他聘請律師為他的案子辯護。"],
            ["n.抗辯、辯解","plea","名詞：抗辯、辯解\n名詞：懇求","He entered a plea of not guilty to the charge of murder.\n他對於謀殺的指控進行抗辯,訴請無罪。"],
            ["v.執行","execute","動詞：執行\n動詞：處決","This strategy is difficult to execute.\n這項策略很難執行。"],
            ["n.主管、行政人員","executive","名詞：主管、行政人員\n形容詞：管理階層的、有權執行決策的","My father is an executive of a small computer company.\n我父親是一間小型電腦公司"],
            ["n.執行","execution","名詞：執行\n名詞：處死","The execution of the new policy was delayed.\n新政策的執行延期了。"],
            ["v.爭鬥","contend","動詞：爭鬥\n動詞：主張、認為","Two parties are contending against each other for victory in election.\n兩黨為了勝選相互爭鬥。"],
            ["v.使直立、豎立","erect","動詞：使直立、豎立\n動詞：主張、認為","The boy scouts are erecting a flagpole.\n這些男童軍正在豎立一根旗竿。"],
            ["n.省、省分","province","名詞：省、省分","There are 10 provinces in Canada.\n加拿大有十個省。"],
            ["n.貢品","tribute","名詞：貢品\n名詞：讚辭、推崇、致敬","In the ancient times, a lot of countries paid tributes to China.\n在古代,許多國家向中國進貢,"]
          ],
        //U5
          [
            ["adj.突然的","abrupt","形容詞：突然的","He caught a cold because of an abrupt change in the nowoq Isinoloo ahogni weather.\n他因為天氣驟變而感冒。"],
            ["n.一小塊土地","patch","名詞：一小塊土地\n名詞：補釘\n名詞：修補程式\n動詞：補綴","He grows a patch of corns.\n他有一小塊玉米田"],
            ["n.水晶","crystal","名詞：水晶\n形容詞：水晶般透明的","Some fortune-tellers can see our future in a crystal ball.\n有些算命師能在水晶球裡看見我們的未來。"],
            ["adj.值得的","worthy","形容詞：值得的\n形容詞：出色的、可敬的","There is nothing worthy of mention.\n不值一提。"],
            ["adj.值得做的","worthwhile","形容詞：值得做的","It is worthwhile to pay a visit to America.\n美國是值得一遊的地方。"],
            ["adj.殖民時代的","colonial","形容詞：殖民時代的\n名詞：居住在殖民地的殖民者","Spain was once an important colonial power.\n西班牙曾是一個重要的殖民強國。"],
            ["n.熱心、奉獻","devotion","名詞：熱心、奉獻\n名詞：摯愛、關愛","His devotion to duty is an example for all of us.\n他的盡忠職守是我們大家的榜樣。"],
            ["v.修改","modify","動詞：修改","The car can be modified for your personal need.\n車子可依據你的個人需求修改。"],
            ["n.層","layer","名詞：層\n名詞：層次\n動詞：將~堆積成層","There is a thick layer of dust.\n這裡有一層厚厚的灰塵。"],
            ["n.絕望","despair","名詞：絕望\n動詞：絕望","He sank into despair after his business failed.\n他在事業失敗後陷入絕望。"],
            ["v.擁抱","embrace","動詞：擁抱\n動詞：欣然接受\n名詞：擁抱","Before sleep, his mother came to embrace him tenderly.\n他的媽媽在睡前溫柔地擁抱他。"],
            ["n.牧場","ranch","名詞：牧場\n動詞：經營農場","He worked as a cowboy on a ranch in Texas.\n新設計是他在德州一處牧場當牛仔,"],
            ["n.短缺","shortage","名詞：短缺","Many rural areas suffer from a severe shortage of doctors.\n許多鄉下地區的醫師嚴重短缺。"],
            ["n.山脊","ridge","名詞：山脊\n動詞：使隆起、使成脊","We walked along the narrow ridge of the mountain.\n我們沿著狹窄的山脊步行。"],
            ["v.巡邏","patrol","動詞：巡邏\n名詞：巡邏","The police were patrolling up and down the streets.\n警方在街上來回巡邏,"],
            ["conj.唯恐、以免","lest","連接詞：唯恐、以免","Be careful test you (should) fall off the fence.\n你要小心,以免從籬笆上摔下來。"],
            ["n.宿命、命運","destiny","名詞：宿命、命運","The destiny of our nation depends on your vote!\n國家的命運取決於你的選票。"],
            ["n.目的地","destination","名詞：目的地","We arrived at our destination tired and hungry.\n我們到達目的地時又累又餓。"],
            ["n.警長、郡長","sheriff","名詞：警長(美式)、郡長(英式)","The sheriff slept with his gun under his pillow.\n預約能出售一共鍋mmul 警長睡覺時槍就放在枕頭下。"],
            ["n.房屋、住宅(集合名詞)","housing","名詞：房屋、住宅(集合名詞)\n名詞：供給住宅、居住","Housing in Hong Kong is the most expensive in the world.\n香港的住宅舉世最貴。"],
            ["n.條約","treaty","名詞：條約","We've signed a peace treaty with neighboring countries.\n我們已和鄰近國家簽訂和平條約。"],
            ["n.格鬥","combat","名詞：格鬥\n名詞：抗爭\n動詞：對抗、與~爭鬥","There was a fierce combat between the two warriors.\n這兩名武士間有激烈的格鬥。"],
            ["adj.破壞性的","destructive","形容詞：破壞性的","Mountaintop removal is a destructive way of extracting coal from mountains.\n剷平山頂是毀滅性的山區採煤方式。"],
            ["n.片段、一部份、v.分割","segment","名詞：片段、一部份\n動詞：分割","He divided the orange into four segments.\n他將柳橙分成四份。"],
            ["n.領域","realm","名詞：領域\n名詞：王國(文雅的書面語)","This problem doesn't belong to the realm of science.\n這問題不屬於科學領域。"],
            ["n.模式","mode","名詞：模式","Their modes of life are different.\n他們生活模式不同。"],
            ["v.排除","exclude","動詞；排除","Women are still excluded from certain positions.\n女性仍被排除於某些職務之外。"],
            ["adj.不包括的","exclusive","形容詞：不包括的\n形容詞：獨有的、獨家的","The ship has a crew of 90. exclusive of the captain.\n這艘船有九十名工作人員,不包含船長在內。"],
            ["n.疤","scar","名詞：疤\n動詞：使~留下傷疤","He has a scar on his forehead.\n他的額頭上有一道疤。"],
            ["n.瓷磚、瓦","tile","名詞：瓷磚、瓦\n動詞：貼瓷磚、瓦","The old house was roofed with red tiles.\n那間老房子的屋頂上鋪著紅瓦。"],
            ["n.跳進","plunge","名詞：跳進\n名詞：暴跌\n動詞：墜入\n動詞：下墜、下跌","He took a plunge into the water.\n他跳入水中。"],
            ["adj.市民的、公民的","civic","形容詞：市民的、公民的","Following traffic regulations is our civic duty.\n遵守交通規則是我們公民的義務。"],
            ["n.(運動比賽)現場觀眾","spectator","名詞：(運動比賽)現場觀眾","Over 20,000 spectators cheer for the soccer team.\n有兩萬多名觀眾替這支足球隊加油。"],
            ["n.電視或網路影片的觀眾","viewer","名詞：電視或網路影片的觀眾\n名詞：影像檢視軟體","Some viewers called in to express their anger.\n有些電視觀眾叩應進來表達憤怒。"],
            ["adj.充裕的","ample","形容詞：充裕的\n形容詞：豐滿的","You'll have ample time to ask questions after the lecture.\n演講後,你們會有充裕的時間發問。"],
            ["v.粉碎、砸碎","shatter","動詞：粉碎、砸碎\n動詞：(使希望等)破滅","All of the glass shattered into pieces after the earthquake.\n地震後,所有玻璃都成了碎片。"],
            ["v.衝撞、猛衝","smash","動詞：衝撞、猛衝\n動詞：砸碎、粉碎\n動詞：打破(紀錄等)\n名詞：重重的一擊\n名詞：破碎\n名詞：極為成功的事務","The car smashed into the side of a bus.\n這部車子撞進一輛公車的側邊。"],
            ["v.軟化","soften","動詞：軟化\n動詞：變柔和","Put on some lotion to soften your skin.\n擦些乳液使肌膚柔軟。"],
            ["adj.不可缺少的","indispensable","形容詞：不可缺少的","The internet is indispensable to modern people.\n網際網路對現代人而言是不可或缺的。"],
            ["n.大教堂","cathedral","名詞：大教堂","A cathedral is usually much larger than an ordinary church.\n大教堂通常比一般教堂大上許多。"],
            ["n.小教堂、禮拜堂","chapel","名詞：小教堂、禮拜堂(通常附屬於某機構或單位)","Most private schools in America have their own chapels.\n美國大多數私立學校有自己的禮拜堂。"],
            ["n.真空","vacuum","名詞：真空\n動詞：用吸塵器清掃","They seal fresh food and meat in vacuum-packed bags.\n他們將新鮮食物及肉類密封於真空袋內。"]
          ],
        //U6
          [
            ["v.穿透、v.滲透","penetrate","動詞：穿透\n動詞：滲透","The bullet can penetrate a wall.\n子彈可穿透牆壁。"],
            ["n.表演者","performer","名詞：表演者","The magician is the star performer in the show.\n魔術師是這場演出中最亮眼的表演者。"],
            ["v.大叫、驚呼","exclaim","動詞：大叫、驚呼","\"What a nice restaurant!\" she exclaimed.\n她驚嘆地說:「多样的一家餐廳啊!」"],
            ["v.沉思、凝視","contemplate","動詞：沉思、凝視(用心或用眼審視)","We are contemplating the possibility of moving to Taipei.\n我們正仔細考量搬到臺北的可能性。"],
            ["adj.例外的、異常的","exceptional","形容詞：例外的、異常的\n形容詞：非凡的、卓越的","This warm weather is exceptional for December.\n就十二月而言,這種溫暖的天氣是不尋常的。"],
            ["n.課程","curriculum","名詞：課程","Humanities and science are both included in the high school curriculum.\n高中課程涵括人文與科學。"],
            ["v.監督","supervise","動詞：監督","He asked me to supervise the workers closely.\n他要我嚴密監督這些員工。"],
            ["n.監督人","supervisor","名詞：監督人","She is now supervisor of 50 workers.\n她現在是五十名員工的主管。"],
            ["n.監督","supervision","名詞：監督","He is now working under his father's supervision.\n他現在在父親的監督下工作。"],
            ["v.駕駛、掌舵","steer","動詞；駕駛、掌舵\n名詞：指點、建議","She steers the boat expertly.\n她熟練地開著船。"],
            ["n.認罪、招認","confession","名詞：認罪、招認\n名詞：告解、懺悔","The prisoner has made a full confession.\n犯人招認所有罪狀。"],
            ["n.工作坊、工房","workshop","名詞：工作坊、工房\n名詞：研習營","I'd like to have my own workshop one day.\n我希望有一天能擁有自己的工作坊。"],
            ["n.代表~","behalf","名詞：代表~","I'd like to thank you all on my mother's behalf.\n我想代表母親向大家致謝。"],
            ["adj.唯一的、n.鞋底","sole","形容詞：唯一的\n名詞：(鞋、腳、襪)底\n動詞：以~做(鞋)底、換(鞋)底","He is the sole owner of the house.\n他是這棟房子唯一的屋主,"],
            ["adj.最低限度的、極少的","minimal","形容詞：最低限度的、極少的","Thanks to proper precaution, damage to the building during the typhoon was minimal.\n由於預防得宜,颱風期間建築物的損害種小。"],
            ["v.減到最小量、使最小化","minimize","動詞：減到最小量、使最小化","We must minimize the risk of infection.\n我們必須將傳染的風險降到最低。"],
            ["adj.袖珍的、迷你的","miniature","形容詞：袖珍的、迷你的\n名詞：極小的複製品、小肖像","The boy is playing with his miniature toy excavator.\n這男孩正在玩他的迷你玩具怪手。"],
            ["n.樂觀、樂觀主義","optimism","名詞：樂觀、樂觀主義","The optimism revealed in his speech really inspired me.\n他演講中呈現的樂觀帶給我很大的激勵。"],
            ["n.掃描、掃視、瀏覽","scan","名詞：掃描、掃視、瀏覽\n動詞：掃描\n動詞：掃視、瀏覽","The hunter found no trace of deer after a careful scan.\n獵人在仔細掃視後,沒有發現鹿的蹤跡。"],
            ["n.商品","commodity","名詞：商品","Nowadays, service is also considered a kind of commodity.\n如今,服務也被視為一項商品。"],
            ["v.產生","yield","動詞：產生\n動詞：居服、讓步\n名詞：產量、收益","Good weather and sufficient rain yield a good harvest.\n好天氣與充足的雨水帶來豐收。"],
            ["n.謹慎","caution","名詞：謹慎\n動詞；警告、使小心","The task should be done with extra caution.\n這項工作執行起來要格外小心。"],
            ["adj.謹慎小心","cautious","形容詞：謹慎小心","She is cautious about giving people her phone number\n她對於提供自己的手機號碼十分謹慎。"],
            ["n.預防、預防措施","precaution","名詞：預防、預防措施","Precaution plays a very important part in risk management.\n防範未然是風險管理的重要一環。"],
            ["adj.言語上的","verbal","形容詞：言語上的\n名詞：動狀詞、準備詞","Verbal and non-verbal communications are equally important.\n言語與非言語溝通同樣重要。"],
            ["adj.天真的","naive","形容詞：天真的","He is too naive to understand the complexity of this job.\n他太天真了,無法理解這份工作的複雜性。"],
            ["n.佃農、小規模的自耕農","peasant","名詞：佃農、小規模的自耕農","In ancient China, there were more peasants than merchants.\n中國古代的農夫比商人多。"],
            ["n.輕視","contempt","名詞：輕視","She treated those dishonest people with contempt.\n她瞧不起那些不誠實的人。"],
            ["v.隱藏","conceal","動詞：隱藏","The problem can't be concealed or ignored.\n這個問題不可能被隱瞞或忽視。"],
            ["v.誘惑","tempt","動詞：誘惑","Hunger tempted him to steal the bread.\n= Hunger tempted him into stealing the bread.\n飢餓誘使他偷麵包。"],
            ["n.誘惑","temptation","名詞：誘惑","The little boy can't resist the temptation of toys and candies.\n這個小男孩無法抵擋玩具和糖果的誘惑。"],
            ["adj.無窮的、無限的","infinite","形容詞：無窮的、無限的","He is as strong as an ox and has infinite strength.\n他像牛一樣強壯,且有無窮的力氣。"],
            ["adj.清醒的","sober","形容詞：清醒的\n形容詞：沒喝醉的、酒醒的\n動詞：(使)清醒\n動詞：(使)嚴肅、冷靜","Make decisions while you are sober.\n清醒時才做決定。"],
            ["adj.荒謬的、可笑的","ridiculous","形容詞：荒謬的、可笑的","It is ridiculous that people should believe such a stupid thing.\n人們竟會相信這麼一件蠢事,實在荒謬。"],
            ["adj.摯愛的","beloved","形容詞：摯愛的\n名詞：心愛的人","He dedicated this poem to his beloved father.\n他將這首詩獻給摯愛的父親。"],
            ["adj.大陸的","continental","形容詞：大陸的","The main feature of continental climate is drynes) and coolness.\n大陸性氣候的特徵是乾燥涼爽。"],
            ["adj.強健的","sturdy","形容詞：強健的\n形容詞：牢固耐用的","He runs an average of 5 km a day to make his legs sturdy.\n他每天平均跑五公里,使雙腿強勁。"],
            ["adj.結構上的","structural","形容詞：結構上的","The political reforms have led to major structural changes in the economy.\n政治改革已在經濟上造成重大的結構改變。"],
            ["v.驚嚇","startle","動詞：驚嚇","The appearance of the lion startled the deer.\n獅子的出現嚇壞這隻鹿。"],
            ["n.偏好","preference","名詞；偏好","I have a preference for green tea over black tea.\n我喜歡綠茶勝過紅茶。"],
            ["adj.更好的、合人意的","preferable","形容詞：更好的、合人意的","A diplomatic solution is preferable to war.\n循外交途徑解決比戰爭好。"],
            ["v.拖曳","haul","動詞：拖曳\n名詞：漁獲量、(贓物的)收穫量","The fishermen hauled up the net.\n這些漁夫將網子拉上來。"],
            ["n.大量的","bulk","名詞；大量","I don't want to spend a bulk of money on vacation.\n我不想花大把的錢在度假上。"],
            ["prep.經由","via","介係詞：經由","My sister likes to contact her schoolmates via social media. She likes to chat with them on Instagram.\n我妹妹喜歡透過社群媒體聯繫同學,她喜歡用IG與她們 聊天。"],
            ["n.贊助人","patron","名詞：贊助人\n名詞：老主顧","The millionaire is a patron of the local arts.\n這位百萬富翁是本地藝術界的贊助人。"],
            ["v.妥協、折衷","compromise","動詞：妥協、折衷\n動詞：損及、危害\n名詞：妥協","The president said he was ready to compromise on Bit loo To tax cuts.\n總統表示願意在減稅議題上讓步。"],
            ["adj.荒謬的","absurd","形容詞：荒謬的","I think this is an absurd suggestion.\n我認為這是很荒謬的提議。"]
          ],
        //U7
          [
            ["n.可能的機會、可能性","odds","名詞：可能的機會、可能性","If you drive every day, the odds are that you'll have an accident at some point.\n若每天開車,發生事故的可能性也大。"],
            ["adj.適切的、恰當的","apt","形容詞：適切的、恰當的\n形容詞：易於~、有~的傾向","A church mouse is an apt description of his poverty.\n「教堂老鼠」是對他的貧窮最貼切的描述。"],
            ["n.強風","blast","名詞：強風\n名詞：爆震\n動詞：炸開、爆炸","He opened the door and a blast of cold air blew in.\n他打開門，一道強烈的冷風襲來。"],
            ["n.門口","doorway","名詞：門口","When I opened the door， she was standing in the doorway.\n當我打開門時，她正站在門口。"],
            ["n.私人車道","driveway","名詞：私人車道","Our car is parked on the driveway.\n我們的車停在私人車道上。"],
            ["n.一巴掌","slap","名詞：一巴掌\n名詞：侮辱\n動詞：攔\n副詞：猛然地(伴隨砰聲巨響)","I gave him a slap on the face.\n我打了他一巴掌。"],
            ["v.通勤","commute","動詞：通勤","It is exhausting to commute from Hsinchu to Taipei every day.\n每天從新竹通勤到臺北是很累人的。"],
            ["n.通勤者","commuter","名詞：通勤者","The train was packed with commuters.\n火車上擠滿通動的乘客。"],
            ["v.縱容、放任","indulge","動詞：縱容、放任","She often indulges her children.\n她經常放縱她的小孩。"],
            ["n.同意","consent","名詞：同意\n動詞：同意","His parents refused to give their consent to his marriage.\n他的父母拒絕同意他的婚事。"],
            ["n.共識","consensus","名詞：共識","Have we reached a consensus?\n我們達成共識了嗎?"],
            ["adj.有敵意的","hostile","形容詞：有敵意的","Why are you so hostile to me?\n你為何對我充滿敵意？"],
            ["n.敵意","hostility","名詞：敵意","The gangsters looked at each other with hostility.\n這些匪徒帶著敵意看著彼此。"],
            ["n.尋求、追求","quest","名詞：尋求、追求","The quest for knowledge brings meaning to our lives.\n知識的追尋為人生帶來意義。"],
            ["n.自我","ego","名詞：自我","Having a strong ego is much different from having a large ego.\n強烈自信與極度自我截然不同。"],
            ["v.訴諸於~","resort","動詞：訴諸於~\n名詞：訴諸、訴求\n名詞：勝地(避寒暑、休養)","We are afraid that these extremists may resort to violence.\n我們擔心這些極端分子會訴諸暴力。"],
            ["n.走廊","corridor","名詞：走廊","Please wait outside in the corridor.\n請在走廊等候。"],
            ["adj.無限大的、極大的","immense","形容詞：無限大的、極大的","The project is of immense value to me personally.\n這項企劃案對我個人來說價值無窮。"],
            ["n.碳","carbon","名詞：碳","Carbon exists in all living things.\n碳存在於所有生物體內。"],
            ["n.鼓掌","applause","名詞：鼓掌","She received a round of loud applause when she bowed.\n當她鞠躬時得到一陣熱烈的掌聲。"],
            ["n.馬鞍","saddle","名詞：馬鞍\n動詞：為馬上鞍","The cowboy swung onto the saddle and rode off.\n那個牛仔縱身躍上馬鞍，揚長而去。"],
            ["v. / n.猛擊、襲擊","assault","名詞：猛擊、襲擊\n動詞：猛擊、襲擊","The terrorists made an assault on the capital yesterday.\n恐怖分子昨天對首都發動攻擊。"],
            ["v. / n.砰然關上","slam","動詞：砰然關上\n名詞：砰然關上","She slammed the door and left in a rage.\n她「砰」一聲地關上門，然後怒氣沖沖地離開。"],
            ["n.流通","currency","名詞：流通\n名詞：貨幣","The view has wide currency among the public.\n這個觀點在大眾間廣為流傳。"],
            ["n.可能性","likelihood","名詞：可能性","There is little likelihood that humans can ever emigrate to Mars.\n人類移民至火星的可能性近乎於零。"],
            ["v. / n.發抖","shiver","動詞：發抖\n名詞：發抖","He shivered with cold.\n他冷得發抖。"],
            ["v. / n.顫抖、微震","quiver","動詞：顫抖、微震\n名詞：顫抖、微震","His whole body quivered with fear.\n他全身因恐懼而顫抖。"],
            ["n.意見、勸告","counsel","名詞：意見、勸告\n動詞：勸告","I should have taken your counsel and saved some money.\n我早該聽你的勸告存一些錢下來。"],
            ["n.顧問、輔導員","counselor","名詞：顧問、輔導員","The counselors will help students with emotional problems.\n輔導員會協助學生解決情緒問題。"],
            ["n.商議、諮詢","consultation","名詞：商議、諮詢","After consultations with my parents， I decided to a study abroad.\n與父母仔細商議後，我決定出國念書。"],
            ["adj.垂直的","vertical","形容詞：垂直的\n名詞：垂直位置、垂直面、重直線","She looked down from the edge of the vertical cliff.\n她從垂直的斷崖邊往下看。"],
            ["adj.水平的","horizontal","形容詞：水平的\n名詞：水平位置、水平面、水平線","He drew a horizontal line on the paper.\n他在紙上畫一條水平線。"],
            ["n.碎片、小片","scrap","名詞：碎片、小片\n動詞：廢棄、廢除","Have you got a scrap of paper I can write on?\n你有一小張紙可以讓我寫東西嗎?"],
            ["n.方言","dialect","名詞：方言","These two dialects are mutually understandable.\n這兩種方言彼此是互通的。"],
            ["n.小溪流","creek","名詞：小溪流","The students walked along the creek for half an hour.\n學生們沿著溪流走了半個小時。"],
            ["adj.肌肉的","muscular","形容詞：肌肉的\n形容詞：肌肉發達的","The muscular system gets softer as one gets older.\n人的肌肉組織會隨著年齡增長愈來愈鬆弛。"],
            ["adj.陽剛的、男性的","masculine","形容詞：陽剛的、男性的","She has a masculine voice.\n她擁有男性化的聲音。"],
            ["n.側面、輪廓","profile","名詞：側面、輪廓\n名詞：人物簡介\n動詞：側寫人物、描繪~的輪廓","Dani has a beautiful profile.\n丹妮的侧面很漂亮。"],
            ["adj.嚴厲的、冷峻的","grim","形容詞：嚴厲的、冷峻的","The police officer was silent and grim.\n這名警官沉默而冷峻。"],
            ["n.一疊、一堆","stack","名詞：一疊、一堆\n動詞：推疊","He pulled out a file from the stack behind him.\n他從身後的一疊檔案中抽出一份。"],
            ["adj.顯著的、顯而易見的","noticeable","形容詞：顯著的、顯而易見的","Alcohol has a noticeable effect on the human body.\n酒精對人體有顯著的影響。"],
            ["n.串、束、簇","cluster","名詞：串、束、簇\n動詞：群聚","There are clusters of grapes on the vine.\n藤上有一串串的葡萄。"],
            ["n.聯賽、循環賽、錦標賽","tournament","名詞：聯賽、循環賽、錦標賽","She won this amateur golf tournament.\n她赢得這次的業餘高爾夫錦標賽。"],
            ["n.資產","asset","名詞；資產","A sense of humor is a great asset in the entertainment business.\n在娛樂圈，幽默感是絕佳的本錢。"]
          ],
        //U8
          [
            ["n.新聞記者","journalist","名詞：新聞記者","He is a well-known journalist.\n他是位有名的新聞記者。"],
            ["n.新聞學","journalism","名詞：新聞學","He has always wanted to major in journalism in college.\n他一直想在大學主修新聞。"],
            ["v.嘲弄","mock","動詞：嘲弄\n形容詞：模擬的\n形容詞：假的\n名詞；模擬測驗","The naughty boy mocked (at) the crippled man.\n這頑皮的男孩嘲弄跛腳的男子。"],
            ["n.意向、目的","intent","名詞：意向、目的\n形容詞：一心一意想要","She behaved foolishly but with good intent.\n她行為愚昧,但立意甚佳。"],
            ["v.浸溼、泡","soak","動詞：浸溼、泡\n名詞：浸、泡","Soak the clothes in water for a few minutes before washing them.\n洗衣服前,先將衣服泡在水裡幾分鐘。"],
            ["n.錫、罐頭","tin","名詞：錫\n名詞：罐頭、洋鐵罐\n動詞：將食物裝入罐中(英式)","She sealed meat in tin foil.\n她將肉封在錫箔紙裡。"],
            ["n.代表、受委託者、v.派、委託~為代表","delegate","名詞：代表、受委託者\n動詞：派、委託~為代表","Around 350 delegates attended the summit meeting.\n大約三百五十位代表參加這次的高峰會談。"],
            ["n.代表團","delegation","名詞：代表團\n名詞：委任、指派(權限等)","The Minister of Finance led the trade delegation to Tokyo.\n財政部長率領貿易代表團出訪東京。"],
            ["v.修剪","trim","動詞：修剪\n動詞：刪減\n名詞：修剪\n形容詞：修剪整齊的","Peter uses a nail clipper to trim his fingernails.\n彼得用指甲刀修剪指甲。"],
            ["n.大腿","thigh","名詞：大腿","I am losing weight, but my thighs are not getting slimmer.\n我的體重減輕了,大腿卻沒有變瘦。"],
            ["adj.統計上的、統計學的","statistical","形容詞：統計上的、統計學的","This problem has become quite serious according to some statistical enidence.\n根據一些統計上的證據,這個問題已經變得相當嚴重。"],
            ["adj.不熟悉的、n.外星人","alien","形容詞：不熟悉的\n形容詞：異國的\n名詞：外星人\n名詞：外國人","These customs are alien to us.\n這些習俗對我們而言相當陌生。"],
            ["n.刻板印象(常用於錯誤的)","stereotype","名詞：刻板印象(常用於錯誤的)\n動詞：使定型","There are many sexual stereotypes in the society.\n社會上有許多性別方面的刻板印象。"],
            ["n.分子","molecule","名詞：分子","Molecules are bigger than atoms.\n分子比原子大。"],
            ["v.提名","nominate","動詞：提名\n動詞：任命","She was the first woman to be nominated for vice president.\n她是第一位被提名為副總統的女性。"],
            ["n.提名","nomination","名詞；提名","Who will get the DPP nomination for president?\n誰會得到民進黨的總統提名?"],
            ["n.被提名者","nominee","名詞：被提名者","Who are the nominees for Best Actor?\n最佳演員的提名者有哪些人呢?"],
            ["n.框架、架構","framework","名詞：框架、架構\n名詞：體制、架構","This is a building with a steel framework.\n這是一棟鋼骨結構的大樓。"],
            ["v.通知","notify","動詞：通知","The school will notify parents if their children are absent.\n如果小孩曠課,學校會通知家長。"],
            ["adj.透明的","transparent","形容詞：透明的","He grows the bulbs in a transparent plastic box.\n他將球根種植在透明的塑膠盒裡,"],
            ["n.疲倦、v.使疲倦","fatigue","名詞：疲倦\n動詞：使疲倦","She was suffering from fatigue.\n她為疲勞所苦。"],
            ["n.局外人","outsider","名詞：局外人","I never know what goes on in the office. I feel like an outsider.\n我從不知道辦公室發生的事,像個局外人。"],
            ["v.使~著迷","fascinate","動詞：使~著迷","Anything to do with airplanes and flying fascinates him.\n任何有關飛機和飛行的事都使他著迷而"],
            ["adj.緊密的、緊湊的、n.小型車","compact","形容詞：緊密的、緊湊的\n形容詞：小巧玲瓏的\n動詞：使緊密結實\n名詞：小型車","She established a compact office in one corner of the living room.\n她在客廳角落設立一間迷你辦公室,"],
            ["adj.青少年的","juvenile","形容詞：青少年的\n名詞：青少年","Juvenile delinquency is a worsening problem in big gn of cities.\n在大城市裡,青少年犯罪是個日益嚴重的問題。"],
            ["adj.青少年時期的、青春期的","adolescent","形容詞：青少年時期的、青春期的\n名詞：青少年(十三到十七歲)","My adolescent son hardly ever talks at home.\n我那正值青春期的兒子在家幾乎都不說話。"],
            ["n.麵團","dough","名詞：麵團、錢(俚語)","She kneaded the dough until it became smooth.\n她將麵糰揉到光滑為止。"],
            ["n.投票選舉(尤指不記名、祕密的)","ballot","名詞：投票選舉(尤指不記名、祕密的)\n名詞：選票\n動詞：不記名投票","The party leader is elected by secret ballot.\n政黨領袖由不記名投票選出。"],
            ["n.攤位","stall","名詞：攤位\n名詞：畜舍中的畜欄\n名詞：室內的小隔間\n動詞：藉故拖延\n動詞：(使)引擎熄火或車拋錨","The stalls are piled high with local vegetables.\n攤位上堆滿了當地的蔬菜。"],
            ["n.肋骨","rib","名詞：肋骨\n動詞：(無惡意的)取笑、逗弄","My son broke a rib when he fell off a ladder.\n我兒子從梯子上掉下來,摔斷肋骨。"],
            ["n.荒野、荒地","wilderness","名詞：荒野、荒地","The deserted garden is like a wilderness.\n這座廢棄花園像一片荒野。"],
            ["n.野生動物(集合名詞)","wildlife","名詞：野生動物(集合名詞)","Scientists work hard to preserve endangered wildlife.\n科學家致力保存瀕臨絕種的野生動物。"],
            ["adj.冷漠的、漠不關心的","indifferent","形容詞：冷漠的、漠不關心的","Most voters are indifferent to the election.\n大部分選民對選舉漠不關心。"],
            ["n.出席","attendance","名詞：出席\n名詞：照顧","The teacher takes attendance to see who has come to class.\n老師點名確認有來上課的人,"],
            ["v.廢止","abolish","動詞：廢止","I think the death penalty should be abolished.\n我認為應該廢除死刑。"],
            ["n.議程","agenda","名詞：議程","The question of security is high on the agenda.\n安全問題會在議程中優先討論。"],
            ["n.極大的痛苦","agony","名詞：極大的痛苦","I'm sympathetic with the agony of these patients.\n我同情這些病人承受的痛苦。"],
            ["n.走道","aisle","名詞：走道","Would you like an aisle seat or a window seat?\n你想要靠走道或靠窗的位置呢?"],
            ["n.過敏","allergy","名詞：過敏","She receives shots to treat her allergies.\n她打針治療過敏。"],
            ["adj.過敏的","allergic","形容詞：過敏的","I am allergic to seafood.\n我對海鮮過敏。"],
            ["v.交替(兩樣物品)、adj.交替的、輪流的","alternate","動詞：交替(兩樣物品)\n動詞：輪流(指兩人之間)\n形容詞：交替的、輪流的","She alternated between cheerfulness and deep despair.\n她時而高興,時而絕望。"],
            ["n.骨董","antique","名詞：骨董\n形容詞：骨董的","The place is full of priceless antiques.\n這個地方充滿了無價的古董。"],
            ["n.競技場","arena","名詞：競技場","Criminals were mostly killed in the arena in ancient Rome.\n古羅馬時期的罪犯大多死於競技場。"],
            ["n.屁股","ass","名詞：屁股(俗俚用語，bottom較正式)\n名詞：傻蛋","I fell down on my ass.\n我一屁股跌在地上。"],
            ["v.使震驚","astonish","動詞：使震驚","What astonishes me most is his complete lack of fear.\n最令我驚訝的是他的無所畏懼。"],
            ["n.驚奇、錯愕","astonishment","名詞：驚奇、錯愕","We can't express our astonishment and anger in words.\n我們的震驚與憤怒無法以言語表達。"]
          ],
        //U9
          [
            ["n.禁令、v.禁止","ban","名詞：禁令\n動詞：禁止","Singapore finally lifted its ban on chewing gum.\n新加坡終於解除嚼食口香糖的禁令。"],
            ["n.所有物、財產","belongings","名詞：所有物、財產","The parking lot will not compensate for any loss of personal belongings.\n停車場不賠償私人財物的損失。"],
            ["adj.有益的","beneficial","形容詞：有益的","Recycling is highly beneficial to the environment.\n資源回收對環境非常有益。"],
            ["v.提防","beware","動詞：提防\n動詞：小心別~","Beware of the dog!\n小心惡犬!"],
            ["n.一道(閃電)、v.急跑","bolt","名詞：一道(閃電)\n動詞：急奔、急跑","The goat was struck dead by a bolt of lightning at the top of the mountain.\n這頭山羊在山頂遭一道閃電擊斃。"],
            ["n.紅利","bonus","名詞：紅利\n名詞：額外贈送之物","Each employee receives an annual bonus.\n每位員工都可領到年度紅利。"],
            ["n.繁榮","boom","名詞：繁榮\n名詞：轟隆聲\n動詞：(使)繁榮、興盛","In boom times, airlines do well.\n景氣好時航空公司一片榮景。"],
            ["n.小亭子","booth","名詞：~亭、小亭子\n名詞：(有遮棚)的攤位","Superman always changes his clothes in a phone booth.\n超人總是在電話亭中換裝。"],
            ["n.公事","briefcase","名詞：公事包","He always brings a black briefcase with him.\n他總是帶著一個黑色的公事包,"],
            ["n.欺凌弱小的人、惡霸","bully","名詞：欺凌弱小的人、惡霸\n動詞：欺負、強凌弱","Bullies are often cowards.\n欺負弱小的人通常是懦夫。"],
            ["n.運河","canal","名詞：運河","Panama Canal connects the Atlantic Ocean with the Pacific Ocean.\n巴拿馬運河連接大西洋與太平洋。"],
            ["n.名人","celebrity","名詞：名人","A lot of celebrities attended the actor's wedding.\n許多名人出席那位演員的婚禮。"],
            ["n.證明書","certificate","名詞：證明書","His birth certificate shows that he was born in London.\n他的出生證明顯示他在倫敦出生。"],
            ["n.唱詩班","choir","名詞：唱詩班","Jason wants to join the choir.\n傑森想加入唱詩班。"],
            ["n.(法規、契約)條款","clause","名詞：(法規、契約)條款\n名詞：(文法)子句","A clause in the bill prohibits tobacco advertising.\n這個法案裡有一項禁止菸品廣告的條款。"],
            ["n.喜劇演員、諸星","comedian","名詞：喜劇演員、諸星","A good comedian can make any situation funny.\n好的喜劇演員能在任何情境下搞笑。"],
            ["n.時事評論員、名嘴","commentator","名詞：時事評論員、名嘴","He's a political commentator.\n他是政治評論家。"],
            ["n.實況播報","commentary","名詞：實況播報\n名詞：評論、註解","They were listening to the radio commentary on the game.\n他們正在收聽收音機上的比賽實況轉播。"],
            ["n.恭維、v.恭維","compliment","名詞：恭維\n動詞：恭維","People paid her compliments on her pretty dress.\n大家都稱讚她漂亮的洋裝。"],
            ["v.領悟","comprehend","動詞：領悟","I fail to comprehend her anger.\n我無法理解她的怒氣。"],
            ["n.理解(力)","comprehension","名詞：理解\n名詞：理解力","The first part of the test is listening comprehension.\n測驗的第一部分是聽力理解。"],
            ["adj.有傳染性的","contagious","形容詞：有傳染性的\n形容詞：具感染力的","The disease is highly contagious.\n這種疾病具高度傳染性。"],
            ["v.汙染","contaminate","動詞：汙染","The blood sample was contaminated with bacteria.\n血液樣本受到細菌汙染。"],
            ["n.版權、著作權","copyright","名詞：版權、著作權\n動詞：為~取得著作權","His work is no longer protected by copyright.\n他的作品已不受著作權保護。"],
            ["n.海關","customs","名詞：海關","When we enter a country, we have to go through the customs first.\n入境一個國家前必須先通過海關。"],
            ["v.欺騙、欺瞞","deceive","動詞：欺騙、欺瞞","He deceived his wife about his income.\n他欺瞞妻子關於收入的事。"],
            ["n.目的地","destination","名詞：目的地","We arrived at our destination tired and hungry.\n我們到達目的地時又累又餓。"],
            ["n.流放、離鄉背井","exile","名詞：流放、離鄉背井\n動詞：放逐","He went into exile to escape political imprisonment.\n他離鄉背井以逃避政治監禁。"],
            ["adj.絕種的、滅絕的","extinct","形容詞：絕種的、滅絕的\n形容詞：(火)熄了的","Giant pandas could become extinct in the wild.\n野生熊貓可能絕跡。"],
            ["n.格式","format","名詞：格式\n動詞：格式化","The dates are typed in the same format.\n日期的輸入格式都相同。"],
            ["adj.極好的、非常宜人的","gorgeous","形容詞：極好的、非常宜人的\n形容詞：極美的、光彩奪目的","We will have gorgeous weather for a couple of days and rain will return next week.\n我們會有幾天的好天氣,然後下週會再下雨。"],
            ["n.地心引力","gravity","名詞：地心引力","Newton discovered the laws of gravity.\n牛頓發現地心引力定律。"],
            ["n.貪心、貪吃","greed","名詞：貪心、貪吃","Greed made him steal his friend's money.\n贪婪促使他偷了朋友的錢。"],
            ["n.指導方針、行動綱領","guideline","名詞：指導方針、行動綱領","This book includes guidelines on every aspect of running a house.\n這本書包含各方面的持家準則。"],
            ["n.草藥","herb","名詞：草藥","A variety of herbs and spices are used in Indian cuisine.\n印度美食添加多種草藥和香料。"],
            ["n.人質","hostage","名詞：人質","She was taken hostage by the gunmen.\n她遭槍手挾持作人質。"],
            ["n.白癡","idiot","名詞：白癡","Some idiot left the tap running and the whole room is water everywhere.\n有個白痴忘記關水龍頭,弄得整間房間到處都是水。"],
            ["n.房東","landlord","名詞：房東","The landlord refused to rent the house to him.\n房東拒絕租他房子。"],
            ["n.主流","mainstream","名詞：主流","Magic realism is the mainstream of Latin-American literature.\n魔幻寫實主義是拉丁美洲文學的主流。"],
            ["n.大廈、巨宅、官邸","mansion","名詞：大廈、巨宅、官邸","The street is lined with enormous mansions where the rich and famous live.\n這條街上整排都是富豪名人居住的華廈。"],
            ["adj.汙穢的、難聞的","nasty","形容詞：汙穢的、難聞的\n形容詞：惡意的、惡劣的","There's a nasty smell in my refrigerator.\n我的冰箱裡有很難聞的臭味。"],
            ["n.參加者","participant","名詞：參加者","Every participant hopes to hit the jackpot.\n每位參加者都希望贏得大獎。"]
          ],
        //U10
          [
            ["n.悲觀主義","pessimism","名詞：悲觀主義","There is now a mood of deepening pessimism about the economy.\n經濟景況目前瀰漫一股悲觀的氛圍。"],
            ["n.脈搏跳動","pulse","名詞：脈搏跳動\n動詞：(規律的)跳動、震動","She felt his wrist, checking for a pulse.\n她摸他的手腕,確認有無脈搏。"],
            ["n.避難","refuge","名詞：避難\n名詞：避難所","During the bombardment, they took refuge in the cellar.\n空襲時,他們躲進地窖避難。"],
            ["adj.敵對的、競爭的","rival","形容詞：敵對的、競爭的\n名詞：敵手、對手\n動詞：匹敵\n動詞：與~競爭","We defeated the rival team and our captain won the MVP award.\n我們擊敗對手,隊長還贏得最佳球員獎。"],
            ["n.醜聞","scandal","名詞：醜聞","The president's reputation has been damaged by a sex scandal.\n總統的名要因一格性醜聞而受損。"],
            ["v.播(種)","sow","動詞：播(種)","Farmers used to sow these fields with rice.\n=Farmers used to sow rice in these fields.\n農夫曾在這些土地上種稻。"],
            ["n.迷信","superstition","名詞：迷信","According to American superstition, if you walk under a ladder, it brings you bad luck.\n根據美國人的迷信,若你行經梯子下方就會招來厄運。"],
            ["v.處理","tackle","動詞：處理\n動詞：(曲棍球、足球中)阻攔、鏟球、(橄欖球中)擒抱(摔倒對方球員)","This country still has many problems to tackle.\n這個國家還有許多問題必須處理。"],
            ["n.興奮、膽顫心驚","thrill","名詞：興奮、膽顫心驚\n動詞：使~興奮、感到刺激、毛骨悚然","The movie is full of thrills. It is very successful.\n這部電影令人膽顫心驚,非常成功。"],
            ["n.驚悚的讀物、電影、戲劇等","thriller","名詞：驚悚的讀物、電影、戲劇等","This is a classic thriller. You'll love it.\n這是一部經典的驚悚片,你會喜歡的。"],
            ["n.教學(尤指小學)","tuition","名詞：教學(尤指小學)\n名詞：學費","Private tuition by a tutor costs a lot.\n家教老師私下授課所費不貲。"],
            ["v.在~下面劃線","underline","動詞：在~下面劃線\n名詞：底線","All the mistakes have been underlined in red ink.\n所有的錯誤都已用紅筆在下方劃線了。"],
            ["n.簽證","visa","名詞：簽證","If you want to visit Russia, you have to get a visa first.\n若你想去俄羅斯,要先拿到簽證才行。"],
            ["n.戰士","warrior","名詞：戰士","A true warrior values glory and honor above life.\n一名真正的戰士將榮耀與榮譽凌駕於生命之上。"],
            ["n.下落、行蹤所在","whereabouts","名詞：下落、行蹤所在\n副詞：在哪裡、在何處","His present whereabouts is / are unknown.\n他目前下落不明。"],
            ["n.假髮","wig","名詞：假髮","She wears a blonde wig to look more fashionable.\n她戴著一頂金色假髮使自己看起來比較時髦。"],
            ["n.遊艇","yacht","名詞：遊艇\n動詞：架/乘遊艇","He owns a yacht and often uses it for cruising.\n他擁有一艘遊艇,並常駕駛它出遊。"],
            ["n.模糊、模糊之物","blur","名詞：模糊、模糊之物\n動詞：(使)模糊","On hearing the accident, she rushed home in a blur of tears.\n聽到這個意外,她淚眼模糊地衝回家。"],
            ["n.保鑣","bodyguard","名詞：保鑣","The president's bodyguards are armed.\n總統的貼身保鑣佩帶武器。"],
            ["v.隨意瀏覽","browse","動詞：隨意瀏覽\n名詞：隨意觀看、瀏覽","I am browsing through old diaries. Should I throw them away?\n我正在瀏覽舊日記,這些日記該去嗎？"],
            ["n.屠夫、肉販","butcher","名詞：屠夫、肉販\n動詞：屠宰、屠殺","Mr. Collins is a butcher, running a small meat shop.\n科林斯先生是名肉販,經營一家小肉舖。"],
            ["n.嘉年華會","carnival","名詞：嘉年華會\n名詞：露天遊樂場","There is a carnival atmosphere in the streets.\n街上彌漫著嘉年華會的氣氛"],
            ["n.主廚(特指餐廳或飯店的專業廚師)","chef","名詞：主廚(特指餐廳或飯店的專業廚師)","I hope to become a chef someday.\n我希望有朝一日成為主廚。"],
            ["adj.體諒的","considerate","形容詞：體諒的","It was very considerate of you to reserve a seat for me.\n你真體貼,幫我留了一個位子。"],
            ["adj.腐敗的","corrupt","形容詞：腐敗的\n動詞：(使)腐敗、腐化","The government was corrupt at that time.\n那時的政府很腐敗。"],
            ["n.腐敗","corruption","名詞：腐敗","Political corruption is closely related to financial scandals.\n政治腐敗和金融醜聞間的關係密不可分。"],
            ["n.民族主義者、美國民主黨員","democrat","名詞：民族主義者、美國民主黨員","The liberal Democrats all voted for the bill.\n開放派的美國民主黨黨員都投票贊成這項法案。"],
            ["n.共和主義者、美國共和黨員","republican","名詞：共和主義者、美國共和黨員\n形容詞：共和(政體)的","All my family members are Republicans, not Democrats.\n我們全家人都是共和黨員,不是民主黨員。"],
            ["n.否認","denial","名詞：否認\n名詞：拒絕","The government issued an official denial of the rumor.\n政府發出官方聲明否認這則謠言。"],
            ["adj.描述的","descriptive","形容詞：描述的","The book contains many descriptive passages about nature.\n這本書有許多描述大自然的段落。"],
            ["v.歧視","discriminate","動詞：歧視\n動詞：分辨、區分","Under federal law, it is illegal to discriminate against a minorities.\n依據聯邦法律,歧視少數民族是違法的。"],
            ["n.歧視","discrimination","名詞：歧視\n名詞：辨別、區別","Many people still have sexual or racial discrimination.\n許多人仍有性別或種族歧視"],
            ["adj.可怕的","dreadful","形容詞：可怕的","The weather is dreadful lately.\n最近天氣糟透了"],
            ["n.誇大","exaggeration","名詞：誇大","It is an exaggeration to say that we are close friends.\n「我們是親密好友」的說法太誇張了。"],
            ["n.過濾器","filter","名詞：過濾器\n動詞：過濾、濾出","We use a water filter to get pure water.\n我們用濾水器取得純淨的水。"],
            ["n.喘氣、倒抽一口氣","gasp","名詞：喘氣、倒抽一口氣\n動詞：喘氣、倒抽一口氣","With a gasp of horror, Lewis jumped up and ran.\n路易斯驚懼地倒抽一口氣,跳起來拔腿就跑。"],
            ["n.刺眼的強光","glare","名詞：刺眼的強光\n名詞：怒視\n動詞：發強光\n動詞：怒視","The glare of the sun on the snow blinded him.\n雪地上刺眼的陽光使他睜不開眼,"],
            ["n.曲棍球","hockey","名詞：曲棍球","Hockey is one of his favorite sports.\n曲棍球是他最喜歡的運動之一。"],
            ["n.嚎叫","howl","名詞：嚎叫\n動詞：(狗、狼)長嚎\n動詞：(人)吼叫、嚎哭(道)\n動詞：(風)怒號","The man let out a howl of despair.\n這名男子發出絕望的呼喊。"],
            ["n.雷射","laser","名詞：雷射","She is going to have a laser surgery to remedy her with nearsightedness.\n她準備接受雷射手術矯正近視。"],
            ["n.立法者、立法委員","lawmaker","名詞：立法者、立法委員","A lawmaker is responsible for making and changing laws.\n立法者負責制定及修改法律。"],
            ["n.訴訟","lawsuit","名詞：訴訟","Knowing that they were very likely to lose, they paid one million to settle the lawsuit.\n他們知道敗訴的機率很大,於是支付一百萬達成和解。"],
            ["n.按摩","massage","名詞：按摩\n動詞：按摩","Amassage can always refresh me.\n按摩總能使我神清氣爽。"]
          ]
        ]
