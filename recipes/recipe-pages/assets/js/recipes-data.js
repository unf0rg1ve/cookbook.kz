// Данные для рецептов
const recipes = [
  {
  id: 1,
  title: "Омлет с помидорами",
  category: "завтраки",
  img: "assets/images/omelette.webp",
  nutrition: {
    calories: 464,
    protein: 24,
    fat: 38,
    carbs: 6
  },
  ingredientsDetailed: [
    { name: "Соль", amount: "0.5 столовой ложки" },
    { name: "Куриное яйцо", amount: "2 штуки" },
    { name: "Подсолнечное масло", amount: "1 штука" },
    { name: "Помидоры", amount: "1 штука" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Разбейте яйца в миску и взболтайте их вилкой.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Разрежьте помидор пополам и потрите на терке в миску с яйцами. Немного посолите и перемешайте.
    </p>
    <br>
    <br>
    <b>Шаг 3</b>
    <br>
    <p>
        На разогретую сковородку вылейте немного подсолнечного масла и получившуюся яично-помидорную смесь. 
    </p>
    <br>
    <br>
    <b>Шаг 4</b>
    <br>
    <p>
        Теперь главное – не дать помидорояйцам превратиться в цельный кусок, как в случае приготовления классического омлета. Для этого помешивайте смесь лопаткой, как бы отковыривая затвердевающую смесь от стенок и дна сковородки. В итоге должна получиться россыпь пористых комков, как на фотографии.
    </p>
    <br>
    <br>
    <b>Шаг 5</b>
    <br>
    <p>
        Когда большая часть воды испарится со сковородки, выкладывайте готовый омлет на тарелку.
    </p>
  `
  },
  {
  id: 2,
  title: "Хачапури",
  category: "завтраки",
  img: "assets/images/khachapuri.webp",
  nutrition: {
    calories: 803,
    protein: 44,
    fat: 44,
    carbs: 61
  },
  ingredientsDetailed: [
    { name: "Молоко", amount: "1 стакан" },
    { name: "Куриное яйцо", amount: "1 штука" },
    { name: "Пшеничная мука", amount: "1 стакан" },
    { name: "Сыр сулугуни", amount: "300г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Смешайте в миске яйцо, молоко и муку.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Тщательно взбейте.
    </p>
    <br>
    <br>
    <b>Шаг 3</b>
    <br>
    <p>
        Потрите сыр или разомните творог, в зависимости от того с чем вы готовите Хачапури. 
    </p>
    <br>
    <br>
    <b>Шаг 4</b>
    <br>
    <p>
        Всыпьте сыр (творог) в тесто.    
    </p>
    <br>
    <br>
    <b>Шаг 5</b>
    <br>
    <p>
        Тщательно размешайте.
    </p>
        <br>
    <br>
    <b>Шаг 6</b>
    <br>
    <p>
        Получившуюся массу вылейте в сковородку. Через некоторое время переверните (примерно через 10 минут). Когда Хачапури подрумянится снимите с огня.
    </p>
        <br>
    <br>
    <b>Шаг 7</b>
    <br>
    <p>
        Подавайте горячим.
    </p>
        <br>
    <br>
    <b>Шаг 8</b>
    <br>
    <p>
        Приятного аппетита!
    </p>
  `
  },
  {
  id: 3,
  title: "Панкейки",
  category: "завтраки",
  img: "assets/images/pancake.webp",
  nutrition: {
    calories: 216,
    protein: 5,
    fat: 13,
    carbs: 21
  },
  ingredientsDetailed: [
    { name: "Сахар", amount: "2 столовые ложки" },
    { name: "Куриное яйцо", amount: "2 штуки" },
    { name: "Растительное масло", amount: "100 мл" },
    { name: "Пшеничная мука", amount: "200 г" },
    { name: "Ванильный сахар", amount: "по вкусу" },
    { name: "Кефир", amount: "0.5 л" },
    { name: "Сода", amount: "1 чайная ложка" },
    { name: "Разрыхлитель", amount: "10 г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
     Приготовление теста начинается с кефира. Кефир нужно налить в кастрюлю и поставить на плиту, включив маленький огонь. Сразу же в него всыпать соду. Гасить ее не нужно, она погасится кислотами кефира. Как только кефир немного нагреется, сода вступит с ним в реакцию, и подниматься пышной пеной.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
     Теперь кастрюлю нужно снять с огня. Кефир будет теплым, сода погасится и не будет чувствоваться в блинах. Если нет разрыхлителя, ничего страшного, без него тоже получаются пышные блины.
    </p>
    <br>
    <br>
    <b>Шаг 3</b>
    <br>
    <p>
     Дальше к кефиру добавить яйца, сахар, ванилин и все взбить. Муку подсыпать небольшими частями и тщательно вымесить миксером.
    </p>
    <br>
    <br>
    <b>Шаг 4</b>
    <br>
    <p>
     Растительное масло вливается в последнюю очередь, когда все компоненты уже растворились в тесте.
    </p>
    <br>
    <br>
    <b>Шаг 5</b>
    <br>
    <p>
     На разогретую сковороду, смазанную растительным жиром, выливать по неполной половине теста и немного его распределить по кругу сковороды. Выпекать блины на медленном огне. Как только начнут появляться лопающиеся пузырьки, блин нужно перевернуть. Если жарить блинчики на блинной сковороде с антипригарным покрытием, маслом смазывать ее не надо.
    </p>
    <br>
    <br>
    <b>Шаг 6</b>
    <br>
    <p>
     Блинчики после жарки смазать сливочным маслом. Приятного аппетита!
    </p>
  `
  },
  {
  id: 4,
  title: "Смузи",
  category: "завтраки",
  img: "assets/images/smuzi.webp",
  nutrition: {
    calories: 216,
    protein: 5,
    fat: 13,
    carbs: 21
  },
  ingredientsDetailed: [
    { name: "Мёд", amount: "1 столовая ложка" },
    { name: "Курага", amount: "80 г" },
    { name: "Овсяные хлопья", amount: "3 столовые ложки" },
    { name: "Миндальное молоко", amount: "2 стакана" },
    { name: "Тёмный изюм", amount: "95 г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Курагу и изюм промыть, залить 1 стаканом горячей воды. 
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Как курага и изюм станут мягкими, измельчить их с другими ингредиентами в блендере до однородного состояния.
    </p>
    <br>
    <br>
    <b>Шаг 3</b>
    <br>
    <p>
        Подавайте охлажденным.
    </p>
  `
  },
    {
  id: 5,
  title: "Сырники",
  category: "завтраки",
  img: "assets/images/syrniki.webp",
  nutrition: {
    calories: 301,
    protein: 19,
    fat: 16,
    carbs: 20
  },
  ingredientsDetailed: [
    { name: "Сахар", amount: "2 столовые ложки" },
    { name: "Яичный желток", amount: "2 штуки" },
    { name: "Кокосовое масло", amount: "1 столовая ложка" },
    { name: "Пшеничная мука", amount: "50 г" },
    { name: "Соль", amount: "щепотка" },
    { name: "Ванилин", amount: "щепотка" },
    { name: "Творог 9%-ный", amount: "400 г" },
    { name: "Разрыхлитель", amount: "1 чайная ложка" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b> Подготовить все необходимые ингредиенты.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b> К творогу добавить желтки.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b> Перемешать.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b> Всыпать сахар, соль, ванилин.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b> Перемешать.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b> Добавить муку и разрыхлитель.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b> Вымесить тесто.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step8.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 8</b> Разделить на восемь равных частей.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step9.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 9</b>Сформировать сырники.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step10.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 10</b>Растопить кокосовое масло.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step11.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 11</b>Обжаривать сырники по 4 минуты с каждой стороны.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/syrniki-step12.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 12</b>Выложить на тарелку.</h5>
        </div>
    </div>
  `
  },
  {
  id: 6,
  title: "Паста карбонара",
  category: "основные",
  img: "assets/images/pasta.webp",
  nutrition: {
    calories: 515,
    protein: 22,
    fat: 29,
    carbs: 41
  },
  ingredientsDetailed: [
    { name: "Тёртый сыр пармезан", amount: "100 г" },
    { name: "Куриное яйцо", amount: "1 штука" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Бекон", amount: "100 г" },
    { name: "Чеснок", amount: "1 зубчик" },
    { name: "Помидоры черри", amount: "30 г" },
    { name: "Сливки 30%-ные", amount: "100 мл" },
    { name: "Паста", amount: "200 г" },
    { name: "Лук", amount: "1 штука" },
    { name: "Смесь итальянских трав", amount: "по вкусу" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Отварить пасту по инструкции на упаковке.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Бекон, лук и чеснок нарезать и обжарить на оливковом масле.
    </p>
    <br>
    <br>
    <b>Шаг 3</b>
    <br>
    <p>
        Выложить готовую пасту на сковороду, влить сливки, разбить яйцо, добавить сыр, приправить солью, перцем и итальянскими травами, готовить на медленном огне около 5 минут.
    </p>
    <br>
    <br>
    <b>Шаг 4</b>
    <br>
    <p>
        Перед подачей украсить пармезаном и помидорами черри.
    </p>
  `
  },
    {
  id: 7,
  title: "Бургер",
  category: "основные",
  img: "assets/images/burger.webp",
  nutrition: {
    calories: 1308,
    protein: 63,
    fat: 53,
    carbs: 147
  },
  ingredientsDetailed: [
    { name: "Сливочное масло", amount: "10 г" },
    { name: "Зеленый салат", amount: "1 штука" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Помидоры", amount: "1 штука" },
    { name: "Плавленый сыр", amount: "2 штуки" },
    { name: "Подсолнечное масло", amount: "2 столовые ложки" },
    { name: "Специи", amount: "по вкусу" },
    { name: "Малосольные огурцы", amount: "1 штука" },
    { name: "Соус барбекю", amount: "4 чайных ложки" },
    { name: "Сладкий красный лук", amount: "1 головка" },
    { name: "Смешанный фарш", amount: "200 г" },
    { name: "Булочка для гамбургеров", amount: "2 штуки" },
    { name: "Соус для бургеров", amount: "4 чайных ложки" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Разрезать булочки, нижнюю часть булки лучше сделать потолще. Можно сделать углубление в нижней части булки, чтобы бургер был более устойчивым.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Разогреть сковороду, добавить немного сливочного масла и обжарить булочки до золотистого цвета на среднем огне, повторить действия для каждой булочки.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>После обжарки необходимо намазать на нижнюю часть булочку готовый бургер-соус или самостоятельно приготовленный.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Выложить фарш в глубокую миску. Добавить перец, соль и ложку подсолнечного масла, специи по вкусу, затем все перемешать. Смазать рабочую поверхность маслом или водой. Сформировать котлеты весом по 100 грамм. Лучше всего формировать котлету диаметром 12,5 см, можно использовать формы для котлет.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b> В чистую сковороду налить немного растительного масла и положить котлету, жарить 1 минуту и 45 секунд на среднем огне.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>Перевернуть котлету и жарить 1 минуту и 45 секунд, за 30–45 секунд до конца положить на котлету кусочек сливочного масла и сверху накрыть листом плавленого сыра, жарить оставшееся время.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b>Собрать бургеры, для одного бургера потребуется: 2 листа салата, 2–3 ломтика помидора, 5 круглых ломтиков огурцов. Количество лука по вкусу. Сложить на нижнюю часть булки слоями салат, помидоры, огурцы, котлету с сыром, лук. На верхнюю часть булки намазать две чайные ложки соуса барбекю.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step8.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 8</b>Накрыть все ингредиенты верхней частью булки. Закончить сборку бургеров.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step9.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 9</b>Отправить бургеры в разогретую духовку на 2 минуты и 20 секунд при температуре 200 градусов. Самое главное не пересушить бургеры.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/burger-step10.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 10</b>При правильной готовке булочки станут хрустящими, а бургер теплым. Приятного аппетита!</h5>
        </div>
    </div>
  `
  },
     {
  id: 8,
  title: "Салат Цезарь",
  category: "основные",
  img: "assets/images/cezar.webp",
  nutrition: {
    calories: 341,
    protein: 5,
    fat: 33,
    carbs: 7
  },
  ingredientsDetailed: [
    { name: "Оливковое масло", amount: "70 мл" },
    { name: "Чеснок", amount: "1 зубчик" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Яичный желток", amount: "2 штуки" },
    { name: "Лимонный сок", amount: "30 мл" },
    { name: "Растительное масло", amount: "100 мл" },
    { name: "Вустерширский соус", amount: "1 чайная ложка" },
    { name: "Французский багет", amount: "75 г" },
    { name: "Салат романо", amount: "1 штука" },
    { name: "Сыр пармезан", amount: "50 г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b> Подготовить необходимые ингредиенты.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Измельчить чеснок до состояния пасты.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>В большой чаше соединить чеснок и желтки.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Добавить ворчестерский соус, лимонный сок и щепотку соли.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b>Постоянно взбивая, постепенно влить сначала 30 мл оливкового масла, затем растительное.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>Хлеб нарезать крупным кубиком.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b>Переложить хлеб на противень, сбрызнуть оливковым маслом, посолить, поперчить и отправить в духовку, разогретую до 180 градусов, на 10-15 минут.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step8.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 8</b>Салат помыть, разобрать на листья, крупные листья можно разорвать на 2-3 части.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step9.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 9</b>Аккуратно руками перемешать салат с соусом.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cezar-step10.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 10</b>Выложить листья на тарелку, сверху положить крутоны и посыпать тертым пармезаном.</h5>
        </div>
    </div>
  `
  },
    {
  id: 9,
  title: "Домашний рататуй",
  category: "основные",
  img: "assets/images/ratatuy.webp",
  nutrition: {
    calories: 161,
    protein: 2,
    fat: 12,
    carbs: 12
  },
  ingredientsDetailed: [
    { name: "Оливковое масло", amount: "70 мл" },
    { name: "Репчатый лук", amount: "1 зубчик" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Сахар", amount: "по вкусу" },
    { name: "Свежий тимьян", amount: "по вкусу" },
    { name: "Петрушка", amount: "5 г" },
    { name: "Чеснок", amount: "2 зубчика" },
    { name: "Баклажаны", amount: "1 штука" },
    { name: "Кабачки", amount: "1 штука" },
    { name: "Красный сладкий перец", amount: "1 штука" },
    { name: "Зелёный сладкий перец", amount: "1 штука" },
    { name: "Жёлтый сладкий перец", amount: "1 штука" },
    { name: "Эстрагон", amount: "1 г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Помыть все овощи. Весь перец избавить от семян и белых прожилок, нарезать квадратами, сторона которого равна 1 см.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Обжарить перец на оливковом масле с щепоткой сахара. Выложить в отдельную миску.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>Нарезать кабачок кубиком, сторона которого равна 1 см.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Обжарить кабачок на оливковом масле с щепоткой сахара. Добавить в миску с перцами.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b>Нарезать баклажан кубиком, сторона которого равна 1 см.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>Обжарить на оливковом масле с щепоткой сахара. Добавить к другим овощам.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b>Мелко нарезать лук и пожарить его на оливковом масле без сахара. Добавить к овощам.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step8.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 8</b>Дольку чеснока раздавить ножом и очень мелко нарезать. Слегка обжарить в той же сковороде.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step9.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 9</b>Добавить на сковороду к чесноку все ранее обжаренные продукты, слегка посолить, посыпать несколькими листиками тимьяна, накрыть крышкой и томить 5 минут на медленном огне.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step10.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 10</b>Нарезать помидоры вместе с кожурой на четвертинки, удалить серединку с семенами и нарезать кубиком.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step11.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 11</b>Добавить помидор к овощам, тушить 5 минут.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step12.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 12</b>Нарезать петрушку, добавить к овощам.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/ratatuy-step13.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 13</b>Положить рататуй в тарелку и украсить эстрагоном.</h5>
        </div>
    </div>
  `
  },
   {
  id: 10,
  title: "Пельмени с говядиной",
  category: "основные",
  img: "assets/images/pelmeny.webp",
  nutrition: {
    calories: 963,
    protein: 51,
    fat: 20,
    carbs: 148
  },
  ingredientsDetailed: [
    { name: "Пшеничная мука", amount: "750 г" },
    { name: "Куриное яйцо", amount: "2 штуки" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Вода", amount: "350 мл" },
    { name: "Чеснок", amount: "1 зубчик" },
    { name: "Говядина", amount: "600 г" },
    { name: "Репчатый лук", amount: "2 головки" },
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Приготовление теста: смешать воду с яйцом и солью, получившуюся смесь влить в просеянную муку, замесить тесто и оставить его на 20-30 минут.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Приготовление фарша: пропустить через мясорубку с мелкой решеткой говядину, добавить в мясо соль, перец, пропущенный через мясорубку лук и мелко рубленный чеснок, все тщательно перемешать.
    </p>
    <br>
    <br>
    <b>Шаг 3</b>
    <br>
    <p>
        Готовое тесто разделить на 4 части, каждую часть скатать в жгут толщиной 2 см, нарезать на кусочки шириной 1,5 см и на присыпанной мукой поверхности раскатать их в тонкие лепешки. В центр каждой лепешки выложить по 1 ч. л. фарша, сложить кружок с начинкой пополам и узелком соединить концы.
    </p>
    <br>
    <br>
    <b>Шаг 4</b>
    <br>
    <p>
        Варить пельмени в подсоленной воде (2 – 2,5 литра на 30 штук) в течение 8-10 минут. Подавать к столу с маслом, сметаной или уксусом.
    </p>
  `
  },
      {
  id: 11,
  title: "Борщ",
  category: "супы",
  img: "assets/images/borsch.webp",
  nutrition: {
    calories: 513,
    protein: 37,
    fat: 34,
    carbs: 17
  },
  ingredientsDetailed: [
    { name: "Подсолнечное масло", amount: "2 столовые ложки" },
    { name: "Репчатый лук", amount: "1 головка" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Лавровый лист", amount: "по вкусу" },
    { name: "Свекла", amount: "1 штука" },
    { name: "Морковь", amount: "1 штука" },
    { name: "Картофель", amount: "200г" },
    { name: "Томатная паста", amount: "1 столовая ложка" },
    { name: "Говяжья вырезка", amount: "300 г" },
    { name: "Говяжья грудинка", amount: "750 г" },
    { name: "Капуста", amount: "300 г" },
    { name: "Сладкий перец", amount: "1 штука" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/borsch-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Мясо положить в большую кастрюлю, залить 3 литрами воды, довести до кипения, варить 1,5 часа.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/borsch-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Нарезать перец.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/borsch-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>Морковь натереть на терке, лук нарезать мелкими кубиками, обжарить до золотистости. Положить в кастрюлю вместе с нарезанным перцем.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/borsch-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Через 10 минут добавить нарезанную картошку.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/borsch-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b>Свеклу натереть, жарить минут 10, добавить томатную пасту, накрыть крышкой и тушить еще 20 минут. В борщ положить через 10 минут после картошки. Варить еще 10 ­минут.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/borsch-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>Нашинковать капусту и добавить ее в самом конце. Варить еще 3 минуты, добавить лавровый лист, посолить, поперчить.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/borsch-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b>Снять с огня, дать настояться минимум 20 минут, а лучше ночь. Есть со сметаной.</h5>
        </div>
    </div>
  `
  },
    {
  id: 12,
  title: "Суп-пюре из тыквы",
  category: "супы",
  img: "assets/images/sup-pjure-iz-tikvi.webp",
  nutrition: {
    calories: 327,
    protein: 10,
    fat: 17,
    carbs: 38
  },
  ingredientsDetailed: [
    { name: "Сливочное масло", amount: "3 столовые ложки" },
    { name: "Куриное яйцо", amount: "2 штуки" },
    { name: "Молоко", amount: "5 стаканов" },
    { name: "Сахар", amount: "2 чайные ложки" },
    { name: "Вода", amount: "3 стакана" },
    { name: "Картофель", amount: "300 г" },
    { name: "Гренки", amount: "150 г" },
    { name: "Тыква", amount: "800 г" },
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Промытые окорочка кладем в кастрюлю, заливаем холодной водой, ставим на сильный огонь. Когда вода закипит, убавляем огонь до минимума, солим по вкусу, кладем неочищенную мытую луковицу и закрываем крышкой. Через 30 минут вылавливаем луковицу, кладем морковку, нарезанную кубиками. Через 5 минут добавляем очищенный и нарезанный картофель, пробуем на соль. Варим еще 10–15 минут.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Затем добавляем вермишель, варим 15 минут. После кладем специи (щепотку эстрагона, душистого и белого перцев, немного черного). Через 5 минут выключаем. Даем супу настояться 10 минут. В тарелку с супом можно положить половинку вареного яйца и мелко нарезанную зелень.
    </p>
    <br>
  `
  },
   {
  id: 13,
  title: "Куриный суп",
  category: "супы",
  img: "assets/images//kurinyy-sup.webp",
  nutrition: {
    calories: 348,
    protein: 29,
    fat: 16,
    carbs: 24
  },
  ingredientsDetailed: [
    { name: "Репчатый лук", amount: "1 штука" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Молотый белый перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Куриные окорочка", amount: "3 штуки" },
    { name: "Сушеный эстрагон", amount: "щепотка" },
    { name: "Картофель", amount: "3 штуки" },
    { name: "Зелень", amount: "30 г" },
    { name: "Вермишель", amount: "50 г" },
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Тыкву и картофель очистить от кожуры, промыть, нарезать тонкими ломтиками, положить в кастрюлю, залить водой, добавить соль, сахар, столовую ложку масла и поставить варить на слабом огне на 25-30 минут.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Добавить подсушенные или поджаренные в масле гренки, размешать и вскипятить. Полученную массу процедить, оставшуюся гущу протереть сквозь сито, все это развести горячим молоком (до густоты сливок) и заправить сливочным маслом.
    </p>
    <br>
  `
  },
    {
  id: 14,
  title: "Гороховый суп",
  category: "супы",
  img: "assets/images/gorohovyy-sup.webp",
  nutrition: {
    calories: 646,
    protein: 18,
    fat: 50,
    carbs: 34
  },
  ingredientsDetailed: [
    { name: "Растительное масло", amount: "30 мл" },
    { name: "Репчатый лук", amount: "1 головка" },
    { name: "Молотый чёрный перец", amount: "по вкусу" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Морковь", amount: "1 штука" },
    { name: "Картофель", amount: "3 штуки" },
    { name: "Белый хлеб", amount: "2 штуки" },
    { name: "Свиные копченые ребра", amount: "500 г" },
    { name: "Горох", amount: "230 г" },
    { name: "Вода", amount: "3 л" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Горох промыть, залить холодной водой и оставить на 2 часа. После чего слить воду, в которой он замачивался.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Залить горох водой (количество указано в ингредиентах) и поставить на огонь. Горох нужно периодически помешивать, чтобы он не пригорел ко дну, и снимать пену с поверхности воды. Варить около часа.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>Для гренок срезать с хлеба корки, нарезать его кубиками со стороной около сантиметра, выложить на противень и отправить в духовку, разогретую до 180 градусов, на 15–20 минут.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Картофель почистить и нарезать небольшими кубиками и добавить в кастрюлю к гороху. Варить еще 15 минут.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b>На сковороде разогреть масло, обжарить на нем измельченный лук до прозрачности.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>Затем добавить тертую на крупной терке морковь и жарить до мягкости моркови.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b>Добавить в суп овощи.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step8.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 8</b>Добавить нарезанное небольшими кусочками копченое мясо.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step9.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 9</b>Перемешать и варить еще 10 минут. Посолить и поперчить по вкусу.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/gorohovyy-sup-step10.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 10</b>Готовый суп снять с огня, накрыть крышкой и дать настояться 15 минут. Подавать с гренками.</h5>
        </div>
    </div>
  `
  },
    {
  id: 15,
  title: "Солянка",
  category: "супы",
  img: "assets/images/soljanka.webp",
  nutrition: {
    calories: 843,
    protein: 50,
    fat: 65,
    carbs: 17
  },
  ingredientsDetailed: [
    { name: "Сахар", amount: "10 г" },
    { name: "Сливочное масло", amount: "25 г" },
    { name: "Репчатый лук", amount: "1 головка" },
    { name: "Соль", amount: "по вкусу" },
    { name: "Петрушка", amount: "10 г" },
    { name: "Лимон", amount: "4 куска" },
    { name: "Маслины", amount: "12 штук" },
    { name: "Морковь", amount: "100 г" },
    { name: "Лавровый лист", amount: "2 штуки" },
    { name: "Говядина", amount: "150 г" },
    { name: "Сметана", amount: "4 столовые ложки" },
    { name: "Каперсы", amount: "60 г" },
    { name: "Оливки", amount: "12 штук" },
    { name: "Черный перец горошком", amount: "по вкусу" },
    { name: "Корнишоны", amount: "60 г" },
    { name: "Вареная ветчина", amount: "400 г" },
    { name: "Говяжьи кости", amount: "400 г" },
    { name: "Помидоры пелати", amount: "500 г" },
    { name: "Телячьи сосиски", amount: "400 г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Морковь крупно нарезать и вместе с половиной большой луковицы слегка поджарить на сковороде гриль. Выложить овощи в кастрюлю, добавить мясо и кость, залить 1,5 л воды и после закипания варить часа полтора, пока мясо не будет готово. Минут за пять до готов­ности бросить лавровый лист и перец горошком.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Мясо вынуть и отложить, чтобы остыло. Если оно было на кости, то, когда остынет, срезать его. Бульон процедить. Оставший­ся репчатый лук нарезать — чем мельче, тем лучше.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>Консервированные помидоры пелати (то есть без кожицы и в собственном соку) выложить в подходящую посуду и превратить с помощью блендера в пюре. Можно использовать томатную пасту, но будет не так вкусно.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Сливочное масло нарезать небольшими кусками и растопить в сотейнике на среднем ­огне. Всыпать лук и пассеровать до основательной золотистости. От лука зависит вкус солянки: если лук будет недожарен, то и в супе будет заметен вкус недожаренного лука. Главная задача — выпарить из него влагу и карамелизовать содержащийся в нем сахар.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b>Выложить в сотейник томатное пюре, тщательно перемешать. Накрыть крышкой и потомить двадцать минут. Нарезать мелкими кубиками корнишоны (или просто соленые огурцы) и отварить их в небольшой кастрюле — в течение минут двадцати после закипания, так они не будут слишком жесткими.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>Нарезать мелкими кубиками ветчину, сосиски и вареное мясо. Вообще, в ход можно пустить все, что найдется колбасно-мяс­ного в холодильнике.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b>Бульон довести до кипения, ­положить в него лук с томат­ным пюре. Когда все это снова закипит, добавить мясо, сосиски и ветчину, а также корнишоны и каперсы. Подержать на огне минут пять, довести до вкуса солью и сахаром. Если поми­доры будут очень сладкие, то можно обойтись без сахара. А вместо соли — использовать жидкость от каперсов или оливок.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/soljanka-step8.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 8</b>В тарелки положить очи­щен­ные от косточек маслины и олив­ки и дольки лимона. Разлить со­лянку, добавить по лож­ке сметаны и немного мелко на­резанной петрушки.</h5>
        </div>
    </div>
  `
  },
    {
  id: 16,
  title: "Пирог шарлотка",
  category: "десерты",
  img: "assets/images/charlotte.webp",
  nutrition: {
    calories: 217,
    protein: 5,
    fat: 5,
    carbs: 38
  },
  ingredientsDetailed: [
    { name: "Сахар", amount: "1 стакан" },
    { name: "Пшеничная мука", amount: "1 стакан" },
    { name: "Куриное яйцо", amount: "5 штук" },
    { name: "Растительное масло", amount: "1 столовая ложка" },
    { name: "Яблоко", amount: "7 штук" },
    { name: "Разрыхлитель", amount: "0.5 чайные ложки" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/charlotte-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Разогреть духовку. Отделить белки от желтков. Белки взбить в крепкую пену с щепоткой соли, постепенно добавляя сахар.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/charlotte-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Продолжать взбивать, добавляя по одному желтки, затем разрыхлитель и муку. Тесто по консистенции должно напоминать сметану.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/charlotte-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>Смазать противень растительным маслом. Вылить половину теста на противень, разложить равномерно нарезанные дольками яблоки, залить второй половиной теста.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/charlotte-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Поместить противень в разогретую духовку. 3 минуты подержать при температуре 200 градусов, затем убавить до 180 и выпекать 30–40 минут.</h5>
        </div>
    </div>
  `
  },
    {
  id: 17,
  title: "Тирамису",
  category: "десерты",
  img: "assets/images/tiramisu.webp",
  nutrition: {
    calories: 545,
    protein: 12,
    fat: 29,
    carbs: 56
  },
  ingredientsDetailed: [
    { name: "Сахар", amount: "100 г" },
    { name: "Печенье савоярди", amount: "400 г" },
    { name: "Сыр маскарпоне", amount: "400 г" },
    { name: "Яичный желток", amount: "6 штук" },
    { name: "Яичный белок", amount: "4 штуки" },
    { name: "Какао-порошок", amount: "20 г" },
    { name: "Ликер «Амаретто»", amount: "2 столовые ложки" },
    { name: "Свежесваренный кофе", amount: "375 мл" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Подготовить необходимые ингредиенты.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Миксером взбить желтки с половиной сахара до белесого цвета, это займет 3–4 минуты.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>Постепенно добавить маскарпоне.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>В другой чаше взбить белки с оставшимся сахаром до глянцевой текстуры и жестких пик.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b>Аккуратно вмешать белки к сырной смеси.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>В остывший кофе добавить амаретто.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step7.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 7</b>Печенья обмакнуть в кофе и уложить в один слой на дно формы размером 20х30 см.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step8.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 8</b>На печенья выложить половину крема из маскарпоне. Сверху выложить второй слой печенья, предварительно обмакнув в кофе. Покрыть оставшимся кремом. Убрать тирамису в холодильник на 4–8 часов.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step9.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 9</b>Перед подачей посыпать тирамису какао.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/tiramisu-step10.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 10</b>Подать.</h5>
        </div>
    </div>
  `
  },
    {
  id: 18,
  title: "Маффины",
  category: "десерты",
  img: "assets/images//maffins.webp",
  nutrition: {
    calories: 476,
    protein: 10,
    fat: 21,
    carbs: 64
  },
  ingredientsDetailed: [
    { name: "Сахар", amount: "100 г" },
    { name: "Куриное яйцо", amount: "1 штука" },
    { name: "Соль", amount: "2 г" },
    { name: "Растительное масло", amount: "60 мл" },
    { name: "Молоко", amount: "150 мл" },
    { name: "Пшеничная мука", amount: "175 г" },
    { name: "Какао", amount: "45 г" },
    { name: "Разрыхлитель", amount: "10 г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Взбить яйцо и добавить в него масло.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Просеять муку, сахар, какао, разрыхлитель и соль. Добавить к яичной смеси. Влить молоко и хорошо вымесить до однородной консистенции.
    </p>
    <br>
    <br>
    <b>Шаг 4</b>
    <br>
    <p>
        Выложить смесь в смазанные маслом формочки для маффинов и печь при 200 градусах 20–25 минут.
    </p>
    <br>
  `
  },
    {
  id: 19,
  title: "Чизкейк",
  category: "десерты",
  img: "assets/images/cheesecake.webp",
  nutrition: {
    calories: 503,
    protein: 6,
    fat: 30,
    carbs: 52
  },
  ingredientsDetailed: [
    { name: "Ванильный стручок", amount: "1 штука" },
    { name: "Сахар", amount: "200 г" },
    { name: "Сливочное масло", amount: "20 г" },
    { name: "Клубника", amount: "200 г" },
    { name: "Лимонная цедра", amount: "1 столовая ложка" },
    { name: "Сливки 35%-ные", amount: "300 мл" },
    { name: "Сыр филадельфия", amount: "225 г" },
    { name: "Песочные крошки", amount: "100 г" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cheesecake-step1.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 1</b>Нарезать небольшими кубиками 150 грамм клубники. Сложить ягоды в металлическую миску, добавить такое же количество сахара и поставить на час на водяную баню.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cheesecake-step2.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 2</b>Песочные крошки перемешать руками с теплым сливочным маслом и 50 г сахара.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cheesecake-step3.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 3</b>Взять сыр «Филадельфия», сливки, внутренности стручка ванили и цедру половины лимона. Взбить смесь в блендере до состояния, напоминающего взбитые сливки.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cheesecake-step4.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 4</b>Выложить сырную смесь ровным слоем толщиной в сантиметр в чашу высотой 10 сантиметров. Сверху добавить слой крошек. Затем еще по слою того и другого. Закончить третьим сырным слоем и убрать в холодильник хотя бы на два часа.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cheesecake-step5.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 5</b>Готовый клубничный сироп процедить через сито. Вместо вареных ягод взять свежих, нарезать их на дольки и вмешать в сироп.</h5>
        </div>
    </div>
    <br>
    <br>
    <div class="step row align-items-center mb-5">
        <div class="col-md-6">
            <img src="assets/images/cheesecake-step6.webp" class="img-fluid rounded shadow">
        </div>
        <div class="col-md-6">
            <h5><b>Шаг 6</b>Достать чизкейк. Вынуть столовую ложку чизкейка с горкой, выложить на тарелку и украсить ягодами в сиропе.</h5>
        </div>
    </div>
  `
  },
      {
  id: 20,
  title: "Печенье",
  category: "десерты",
  img: "assets/images/cookie.webp",
  nutrition: {
    calories: 184,
    protein: 3,
    fat: 11,
    carbs: 19
  },
  ingredientsDetailed: [
{ name: "Сахар", amount: "50 г" },
    { name: "Сливочное масло", amount: "120 г" },
    { name: "Куриное яйцо", amount: "1 штука" },
    { name: "Пшеничная мука", amount: "1 стакан" },
    { name: "Ванилин", amount: "5 г" },
    { name: "Разрыхлитель", amount: "2 г" },
    { name: "Сухофрукты", amount: "2 столовые ложки" },
    { name: "Белый шоколад", amount: "50 г" },
    { name: "Молотая корица", amount: "5 г" },
    { name: "Овсяные хлопья быстрого приготовления", amount: "1 стакан" }
  ],
  html: `
    <h2>Инструкция приготовления</h2>
    <br>
    <br>
    <b>Шаг 1</b>
    <br>
    <p>
        Взбить масло с сахаром.
    </p>
    <br>
    <br>
    <b>Шаг 2</b>
    <br>
    <p>
        Добавить яйцо и еще раз взбить.
    </p>
    <br>
    <b>Шаг 3</b>
    <br>
    <p>
        Добавить соль, разрыхлитель, корицу, ванилин, еще раз взбить.
    </p>
    <br>
    <br>
    <b>Шаг 4</b>
    <br>
    <p>
        Добавить овсяные хлопья, тщательно перемешать массу.
    </p>
    <br>
    <br>
    <b>Шаг 5</b>
    <br>
    <p>
        Добавить мелко порубленный шоколад и сухофрукты, перемешать.
    </p>
    <br>
    <br>
    <b>Шаг 6</b>
    <br>
    <p>
        Добавить муку, тщательно размять тесто руками (ложкой уже не получится).
    </p>
    <br>
    <br>
    <b>Шаг 7</b>
    <br>
    <p>
        Разделить тесто на 12 частей, скатать из них шарики и выложить на противень, застеленный бумагой для выпечки, подальше друг от друга.
    </p>
    <br>
    <br>
    <b>Шаг 8</b>
    <br>
    <p>
        Выпекать в духовке, разогретой до 180 градусов, 15 минут. Вынуть и остудить на противне, когда немного затвердеют — можно снимать.
    </p>
  `
  },
];
