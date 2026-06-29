const countries = {
  'indonesia': {
    names: { id: 'Indonesia', en: 'Indonesia', ja: 'インドネシア', ko: '인도네시아', zh: '印度尼西亚' },
    flag: '🇮🇩',
    articles: [
      {
        id: 'indonesia-majapahit',
        langs: {
          id: { title: 'Kerajaan Majapahit', desc: 'Kerajaan Hindu-Buddha terbesar di Nusantara yang menyatukan hampir seluruh Asia Tenggara di bawah satu panji.', content: '<p class="mb-4">Majapahit (1293–1527 M) adalah puncak kejayaan peradaban Nusantara. Di bawah Raja Hayam Wuruk dan Mahapatih Gajah Mada, kerajaan ini menguasai wilayah dari Jawa, Sumatera, Kalimantan, Sulawesi, Bali, hingga sebagian Semenanjung Malaya dan Filipina.</p><p class="mb-4">Gajah Mada bersumpah lewat <strong>Sumpah Palapa</strong> untuk tidak menikmati rempah sebelum menyatukan Nusantara. Sumpah ini terbukti — hampir seluruh Nusantara berhasil dipersatukan.</p><p class="mb-4">Warisan terbesar Majapahit adalah semboyan <em>"Bhinneka Tunggal Ika"</em> dari Kitab Sutasoma yang kini menjadi semboyan resmi Negara Indonesia.</p>', sourceDomain: 'id.wikipedia.org', sourceSnippet: 'Wikipedia Indonesia — Kerajaan Majapahit.' },
          en: { title: 'Majapahit Empire', desc: 'The greatest Hindu-Buddhist kingdom in the archipelago that united almost all of Southeast Asia.', content: '<p class="mb-4">Majapahit (1293–1527 CE) was the pinnacle of Nusantara civilization. Under King Hayam Wuruk and Mahapatih Gajah Mada, it controlled Java, Sumatra, Borneo, Sulawesi, Bali, and parts of the Malay Peninsula.</p><p class="mb-4">Gajah Mada swore the <strong>Palapa Oath</strong> — vowing not to enjoy spices until the archipelago was united. He succeeded.</p><p class="mb-4">The greatest legacy is the motto <em>"Bhinneka Tunggal Ika"</em> (Unity in Diversity) which is now Indonesia\'s official state motto.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Majapahit Empire.' },
          ja: { title: 'マジャパヒト王国', desc: '東南アジアのほぼ全域を統一した、群島最大のヒンドゥー・仏教王国。', content: '<p class="mb-4">マジャパヒト（1293–1527年）はヌサンタラ文明の頂点でした。ハヤム・ウルク王とガジャ・マダ宰相の下、ジャワ、スマトラ、ボルネオ、スラウェシ、バリ、マレー半島の一部を支配しました。</p><p class="mb-4">国家標語「ビネカ・トゥンガル・イカ」（多様性の中の統一）はマジャパヒト時代のスタソマ書から生まれました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia Japan — マジャパヒト王国。' },
          ko: { title: '마자파힛 제국', desc: '동남아시아 거의 전역을 통일한 군도 최대의 힌두-불교 왕국.', content: '<p class="mb-4">마자파힛(1293–1527년)은 누산타라 문명의 정점이었습니다. 하얌 우룩 왕과 가자 마다 재상 하에 자바, 수마트라, 보르네오, 술라웨시, 발리 및 말레이 반도 일부를 지배했습니다.</p><p class="mb-4">국가 표어 "비네카 퉁갈 이카"(다양성 속의 통일)는 마자파힛 시대에서 유래했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia Korea — 마자파힛 제국.' },
          zh: { title: '满者伯夷帝国', desc: '统一了几乎整个东南亚的群岛最大的印度教-佛教王国。', content: '<p class="mb-4">满者伯夷（1293–1527年）是努山塔拉文明的顶峰。在哈雅姆·乌鲁克国王和加贾·马达宰相领导下，帝国控制了爪哇、苏门答腊、婆罗洲、苏拉威西、巴厘岛及马来半岛部分地区。</p><p class="mb-4">国家格言"比内卡·通加尔·伊卡"（多样性中的统一）来自满者伯夷时代。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia China — 满者伯夷帝国。' }
        }
      },
      {
        id: 'indonesia-proklamasi',
        langs: {
          id: { title: 'Proklamasi Kemerdekaan 1945', desc: 'Detik-detik bersejarah ketika Soekarno-Hatta memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945.', content: '<p class="mb-4">Pada Jumat, 17 Agustus 1945 pukul 10.00 WIB, Ir. Soekarno membacakan teks Proklamasi Kemerdekaan Indonesia di Jalan Pegangsaan Timur 56, Jakarta. Peristiwa ini menandai berakhirnya penjajahan 350 tahun Belanda dan 3,5 tahun Jepang.</p><p class="mb-4">Naskah proklamasi disusun semalam sebelumnya di rumah Laksamana Maeda setelah peristiwa Rengasdengklok. Teks singkat namun dahsyat ini diketik oleh Sayuti Melik.</p><p class="mb-4">Proklamasi ini kemudian disebarkan ke seluruh penjuru negeri melalui radio dan kurir, meski Belanda berusaha keras memblokir informasinya.</p>', sourceDomain: 'anri.go.id', sourceSnippet: 'Arsip Nasional RI — Proklamasi Kemerdekaan 1945.' },
          en: { title: 'Independence Proclamation 1945', desc: 'The historic moment when Sukarno-Hatta proclaimed Indonesian independence on August 17, 1945.', content: '<p class="mb-4">On Friday, August 17, 1945 at 10:00 AM local time, Ir. Sukarno read the Indonesian Independence Proclamation at Jalan Pegangsaan Timur 56, Jakarta. This event marked the end of 350 years of Dutch colonialism and 3.5 years of Japanese occupation.</p><p class="mb-4">The proclamation text was drafted the night before at Admiral Maeda\'s house after the Rengasdengklok Incident. The brief but powerful text was typed by Sayuti Melik.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Indonesian Independence Proclamation.' },
          ja: { title: '1945年独立宣言', desc: '1945年8月17日にスカルノ・ハッタがインドネシア独立を宣言した歴史的瞬間。', content: '<p class="mb-4">1945年8月17日金曜日午前10時、スカルノがジャカルタのプガンサアン・ティムル通り56番地でインドネシア独立宣言文を読み上げました。これにより350年のオランダ植民地支配と3.5年の日本占領が終わりを告げました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — インドネシア独立宣言。' },
          ko: { title: '1945년 독립 선언', desc: '1945년 8월 17일 수카르노-하타가 인도네시아 독립을 선언한 역사적 순간.', content: '<p class="mb-4">1945년 8월 17일 금요일 오전 10시, 수카르노가 자카르타 프강사안 티무르 56번지에서 독립 선언문을 낭독했습니다. 이로써 350년의 네덜란드 식민 지배와 3.5년의 일본 점령이 끝났습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 인도네시아 독립 선언.' },
          zh: { title: '1945年独立宣言', desc: '1945年8月17日苏加诺-哈达宣布印度尼西亚独立的历史性时刻。', content: '<p class="mb-4">1945年8月17日星期五上午10时，苏加诺在雅加达普甘萨安帝穆尔56号宣读了印度尼西亚独立宣言。这标志着350年荷兰殖民统治和3.5年日本占领的结束。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 印度尼西亚独立宣言。' }
        }
      },
      {
        id: 'indonesia-sriwijaya',
        langs: {
          id: { title: 'Kerajaan Sriwijaya', desc: 'Kerajaan maritim terbesar Asia Tenggara yang menguasai jalur perdagangan Selat Malaka selama 7 abad.', content: '<p class="mb-4">Sriwijaya (abad ke-7 hingga ke-13 M) adalah kekaisaran maritim yang berpusat di Palembang, Sumatera Selatan. Kerajaan ini menguasai Selat Malaka — jalur perdagangan tersibuk di Asia — dan memungut bea dari setiap kapal yang lewat.</p><p class="mb-4">Sriwijaya juga menjadi pusat pembelajaran agama Buddha terkemuka. Biksu Tiongkok I Tsing mencatat lebih dari 1.000 biksu belajar di sini pada abad ke-7.</p><p class="mb-4">Kerajaan ini melemah setelah serangan Kerajaan Chola dari India Selatan pada 1025 M dan akhirnya runtuh ditelan Majapahit.</p>', sourceDomain: 'id.wikipedia.org', sourceSnippet: 'Wikipedia Indonesia — Kerajaan Sriwijaya.' },
          en: { title: 'Srivijaya Empire', desc: 'The greatest maritime empire of Southeast Asia that controlled the Strait of Malacca trade routes for 7 centuries.', content: '<p class="mb-4">Srivijaya (7th–13th century CE) was a maritime empire centered in Palembang, South Sumatra. It controlled the Strait of Malacca — Asia\'s busiest trade route — collecting tolls from every passing ship.</p><p class="mb-4">Srivijaya was also a leading center of Buddhist learning. Chinese monk I Tsing recorded over 1,000 monks studying here in the 7th century.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Srivijaya Empire.' },
          ja: { title: 'スリヴィジャヤ帝国', desc: '7世紀にわたりマラッカ海峡の交易路を支配した東南アジア最大の海洋帝国。', content: '<p class="mb-4">スリヴィジャヤ（7世紀〜13世紀）は南スマトラのパレンバンを中心とした海洋帝国でした。アジア最大の貿易ルートであるマラッカ海峡を支配し、通過する船から通行料を徴収しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — スリヴィジャヤ帝国。' },
          ko: { title: '스리비자야 제국', desc: '7세기 동안 말라카 해협 무역로를 지배한 동남아시아 최대의 해양 제국.', content: '<p class="mb-4">스리비자야(7세기~13세기)는 남부 수마트라 팔렘방을 중심으로 한 해양 제국이었습니다. 아시아에서 가장 바쁜 무역 루트인 말라카 해협을 지배하며 통과하는 모든 선박에서 통행료를 징수했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 스리비자야 제국.' },
          zh: { title: '室利佛逝帝国', desc: '控制马六甲海峡贸易路线长达7个世纪的东南亚最大海洋帝国。', content: '<p class="mb-4">室利佛逝（7世纪至13世纪）是以南苏门答腊巨港为中心的海洋帝国。它控制着亚洲最繁忙的贸易路线——马六甲海峡，向每艘过往船只收取通行费。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 室利佛逝帝国。' }
        }
      },
      {
        id: 'indonesia-bandung-api',
        langs: {
          id: { title: 'Bandung Lautan Api', desc: 'Strategi bumi hangus demi mencegah Sekutu dan NICA menggunakan kota Bandung.', content: '<p class="mb-4">Pada 23 Maret 1946, sekitar 200.000 penduduk Bandung membakar rumah mereka sendiri dalam waktu tujuh jam dan meninggalkan kota menuju pegunungan. Ini dilakukan agar tentara Sekutu tidak dapat menggunakan Bandung sebagai markas militer.</p>', sourceDomain: 'id.wikipedia.org', sourceSnippet: 'Wikipedia — Bandung Lautan Api.' },
          en: { title: 'Bandung Sea of Fire', desc: 'A scorched earth strategy to prevent Allies and NICA from using the city.', content: '<p class="mb-4">On March 23, 1946, about 200,000 residents of Bandung burned their own homes within seven hours and evacuated to the mountains, preventing Allied forces from using the city as a military base.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Bandung Sea of Fire.' },
          ja: { title: 'バンドン火の海事件', desc: '連合国軍による都市の使用を防ぐための焦土作戦。', content: '<p class="mb-4">1946年3月23日、約20万人のバンドン住民が連合国軍の軍事基地化を防ぐため、7時間で自宅に火を放ち山へ避難しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — バンドン火の海事件。' },
          ko: { title: '반둥 불바다 사건', desc: '연합군의 도시 사용을 막기 위한 청야 전술.', content: '<p class="mb-4">1946년 3월 23일, 약 20만 명의 반둥 주민들이 연합군의 군사 기지화를 막기 위해 7시간 만에 자신의 집에 불을 지르고 산으로 대피했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 반둥 불바다.' },
          zh: { title: '万隆火海事件', desc: '为防止盟军利用该城市而采取的焦土战略。', content: '<p class="mb-4">1946年3月23日，约20万万隆居民在7小时内烧毁了自己的家园并撤退到山区，以防止盟军将该市用作军事基地。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 万隆火海事件。' }
        }
      },
      {
        id: 'indonesia-borobudur',
        langs: {
          id: { title: 'Candi Borobudur', desc: 'Kuil Buddha terbesar di dunia peninggalan Dinasti Syailendra.', content: '<p class="mb-4">Dibangun pada abad ke-9, Candi Borobudur di Magelang, Jawa Tengah, adalah monumen Buddha terbesar di dunia. Candi ini memiliki 2.672 panel relief dan 504 patung Buddha yang menceritakan perjalanan menuju Nirwana.</p>', sourceDomain: 'whc.unesco.org', sourceSnippet: 'UNESCO World Heritage Centre — Borobudur Temple Compounds.' },
          en: { title: 'Borobudur Temple', desc: 'The world\'s largest Buddhist temple built by the Sailendra Dynasty.', content: '<p class="mb-4">Built in the 9th century, Borobudur in Central Java is the world\'s largest Buddhist monument, featuring 2,672 relief panels and 504 Buddha statues illustrating the journey to Nirvana.</p>', sourceDomain: 'whc.unesco.org', sourceSnippet: 'UNESCO — Borobudur.' },
          ja: { title: 'ボロブドゥール寺院', desc: 'シャイレーンドラ朝によって建てられた世界最大の仏教寺院。', content: '<p class="mb-4">9世紀に建設された中部ジャワ州のボロブドゥールは世界最大の仏教遺跡であり、2,672枚のレリーフと504体の仏像があります。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ボロブドゥール遺跡。' },
          ko: { title: '보로부두르 사원', desc: '샤일렌드라 왕조가 세운 세계 최대의 불교 사원.', content: '<p class="mb-4">9세기에 지어진 중부 자바의 보로부두르는 열반으로 가는 여정을 묘사한 2,672개의 부조 패널과 504개의 불상을 특징으로 하는 세계 최대의 불교 기념물입니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 보로부두르.' },
          zh: { title: '婆罗浮屠', desc: '由夏连特拉王朝建造的世界上最大的佛教寺庙。', content: '<p class="mb-4">建于9世纪的中爪哇婆罗浮屠是世界上最大的佛教纪念碑，拥有2672块浮雕面板和504尊佛像。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 婆罗浮屠。' }
        }
      },
      {
        id: 'indonesia-budi-utomo',
        langs: {
          id: { title: 'Budi Utomo & Kebangkitan Nasional', desc: 'Organisasi modern pertama yang menandai lahirnya pergerakan nasional Indonesia.', content: '<p class="mb-4">Didirikan pada 20 Mei 1908 oleh para mahasiswa STOVIA (sekolah dokter Jawa), Budi Utomo adalah organisasi modern pertama di Nusantara. Tanggal berdirinya kini diperingati sebagai Hari Kebangkitan Nasional.</p>', sourceDomain: 'kemdikbud.go.id', sourceSnippet: 'Kemdikbud RI — Sejarah Budi Utomo.' },
          en: { title: 'Budi Utomo & National Awakening', desc: 'The first modern organization marking the birth of the Indonesian national movement.', content: '<p class="mb-4">Founded on May 20, 1908, by medical students of STOVIA, Budi Utomo was the first modern organization in the archipelago. Its founding date is now celebrated as National Awakening Day.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Budi Utomo.' },
          ja: { title: 'ブディ・ウトモと民族覚醒', desc: 'インドネシア民族運動の誕生を告げる最初の近代的な組織。', content: '<p class="mb-4">1908年5月20日に医学生によって設立されたブディ・ウトモは群島初の近代的な組織でした。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ブディ・ウトモ。' },
          ko: { title: '부디 우토모와 민족 각성', desc: '인도네시아 민족 운동의 탄생을 알리는 최초의 현대적 조직.', content: '<p class="mb-4">1908년 5월 20일 의대생들이 설립한 부디 우토모는 군도 최초의 현대적인 조직이었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 부디 우토모.' },
          zh: { title: '至善社与民族觉醒', desc: '标志着印度尼西亚民族运动诞生的第一个现代组织。', content: '<p class="mb-4">至善社由医学生于1908年5月20日成立，是群岛上的第一个现代组织。这一天现在被定为民族觉醒日。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 至善社。' }
        }
      },
      {
        id: 'indonesia-kaa',
        langs: {
          id: { title: 'Konferensi Asia-Afrika 1955', desc: 'Pertemuan bersejarah negara-negara dunia ketiga yang menentang kolonialisme.', content: '<p class="mb-4">Diadakan di Bandung pada April 1955, KAA dihadiri 29 negara yang mewakili lebih dari setengah populasi dunia. Konferensi ini dipelopori oleh Indonesia dan melahirkan "Dasasila Bandung" serta Gerakan Non-Blok pada masa Perang Dingin.</p>', sourceDomain: 'kemenlu.go.id', sourceSnippet: 'Kemenlu RI — Sejarah Konferensi Asia Afrika.' },
          en: { title: 'Asian-African Conference 1955', desc: 'Historic meeting of third-world countries opposing colonialism.', content: '<p class="mb-4">Held in Bandung in April 1955, the AAC was attended by 29 countries representing over half the world\'s population. It birthed the "Ten Principles of Bandung" and the Non-Aligned Movement.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Bandung Conference.' },
          ja: { title: '1955年アジア・アフリカ会議', desc: '植民地主義に反対する第三世界諸国の歴史的会議。', content: '<p class="mb-4">1955年4月にバンドンで開催され、世界人口の半分以上を代表する29か国が参加し、非同盟運動のきっかけとなりました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — バンドン会議。' },
          ko: { title: '1955년 아시아-아프리카 회의', desc: '식민주의에 반대하는 제3세계 국가들의 역사적인 회의.', content: '<p class="mb-4">1955년 4월 반둥에서 개최된 이 회의에는 세계 인구의 절반 이상을 대표하는 29개국이 참석하여 비동맹 운동의 탄생을 이끌었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 반둥 회의.' },
          zh: { title: '1955年亚非会议', desc: '反对殖民主义的第三世界国家的历史性会议。', content: '<p class="mb-4">1955年4月在万隆举行，代表世界一半以上人口的29个国家出席了会议，催生了不结盟运动。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 万隆会议。' }
        }
      },
      {
        id: 'indonesia-krakatau',
        langs: {
          id: { title: 'Erupsi Krakatau 1883', desc: 'Letusan gunung berapi yang menghasilkan suara paling keras dalam sejarah manusia.', content: '<p class="mb-4">Pada 26 Agustus 1883, Gunung Krakatau meletus dengan kekuatan 13.000 kali bom atom Hiroshima. Suaranya terdengar hingga 4.800 km jauhnya, memicu tsunami setinggi 36 meter, dan menurunkan suhu global selama beberapa tahun.</p>', sourceDomain: 'ng.com', sourceSnippet: 'National Geographic — 1883 Krakatoa Eruption.' },
          en: { title: '1883 Eruption of Krakatoa', desc: 'The volcanic eruption that produced the loudest sound in human history.', content: '<p class="mb-4">On August 26, 1883, Krakatoa erupted with the force of 13,000 Hiroshima bombs. The sound was heard 4,800 km away, triggering 36m tsunamis and dropping global temperatures for years.</p>', sourceDomain: 'ng.com', sourceSnippet: 'National Geo — Krakatoa.' },
          ja: { title: '1883年のクラカトア噴火', desc: '人類史上最も大きな音を立てた火山噴火。', content: '<p class="mb-4">1883年8月26日、クラカトアは広島型原爆の1万3千倍の威力で噴火しました。その音は4,800km先まで聞こえました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — クラカトアの噴火。' },
          ko: { title: '1883년 크라카토아 화산 폭발', desc: '인류 역사상 가장 큰 소리를 낸 화산 폭발.', content: '<p class="mb-4">1883년 8월 26일, 크라카토아는 히로시마 원자폭탄의 13,000배 위력으로 폭발했습니다. 그 소리는 4,800km 떨어진 곳에서도 들렸습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 크라카토아.' },
          zh: { title: '1883年喀拉喀托火山爆发', desc: '产生人类历史上最大声音的火山爆发。', content: '<p class="mb-4">1883年8月26日，喀拉喀托火山爆发，威力相当于13000颗广岛原子弹，远在4800公里外都能听到声音。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 喀拉喀托火山爆发。' }
        }
      },
      {
        id: 'indonesia-sumpah-pemuda',
        langs: {
          id: { title: 'Sumpah Pemuda 1928', desc: 'Tonggak utama pergerakan kemerdekaan yang menyatukan identitas bangsa.', content: '<p class="mb-4">Diikrarkan pada 28 Oktober 1928, pemuda dari seluruh Nusantara bersumpah untuk bertumpah darah satu, berbangsa satu, dan menjunjung bahasa persatuan: Indonesia. Pada kongres ini pula lagu "Indonesia Raya" pertama kali diperdengarkan.</p>', sourceDomain: 'kemdikbud.go.id', sourceSnippet: 'Kemdikbud RI — Sejarah Sumpah Pemuda.' },
          en: { title: 'Youth Pledge 1928', desc: 'The major milestone of the independence movement uniting the national identity.', content: '<p class="mb-4">Pledged on October 28, 1928, youths from across the archipelago swore to one motherland, one nation, and one language: Indonesia. The anthem "Indonesia Raya" was also played for the first time here.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Youth Pledge.' },
          ja: { title: '1928年の青年の誓い', desc: '国民のアイデンティティを統一した独立運動の主要な節目。', content: '<p class="mb-4">1928年10月28日、群島全域の青年が一つの祖国、一つの国民、一つの言語（インドネシア語）を誓いました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 青年の誓い。' },
          ko: { title: '1928년 청년의 맹세', desc: '국가 정체성을 통합한 독립 운동의 주요 이정표.', content: '<p class="mb-4">1928년 10월 28일, 군도 전역의 청년들이 하나의 조국, 하나의 민족, 하나의 언어인 인도네시아어를 맹세했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 청년의 맹세.' },
          zh: { title: '1928年青年誓言', desc: '团结民族认同的独立运动的重要里程碑。', content: '<p class="mb-4">1928年10月28日，来自群岛各地的青年宣誓：一个祖国、一个民族、一种语言：印度尼西亚语。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 青年誓言。' }
        }
      },
      {
        id: 'indonesia-voc',
        langs: {
          id: { title: 'Era VOC (Hindia Belanda)', desc: 'Perusahaan multinasional pertama di dunia yang memonopoli rempah-rempah Nusantara.', content: '<p class="mb-4">Vereenigde Oostindische Compagnie (VOC) didirikan pada 1602 dan menjadi perusahaan multinasional pertama sekaligus terkaya di dunia. VOC memiliki tentara sendiri, hak mencetak uang, dan menjajah Nusantara demi monopoli pala dan cengkeh.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Dutch East India Company.' },
          en: { title: 'VOC Era (Dutch East Indies)', desc: 'The world\'s first multinational corporation that monopolized archipelago spices.', content: '<p class="mb-4">The Dutch East India Company (VOC), founded in 1602, was the world\'s first and richest multinational company. It had its own army, minted its own coins, and colonized the archipelago for spice monopoly.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — VOC.' },
          ja: { title: 'オランダ東インド会社 (VOC)', desc: '群島の香辛料を独占した世界初の多国籍企業。', content: '<p class="mb-4">1602年に設立されたオランダ東インド会社（VOC）は、独自の軍隊を持ち、香辛料の独占のために群島を植民地化した世界初の多国籍企業でした。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — オランダ東インド会社。' },
          ko: { title: '네덜란드 동인도 회사 (VOC)', 기: '군도의 향신료를 독점한 세계 최초의 다국적 기업.', content: '<p class="mb-4">1602년에 설립된 네덜란드 동인도 회사(VOC)는 자체 군대를 보유하고 향신료 독점을 위해 군도를 식민지화한 세계 최초의 다국적 기업이었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 네덜란드 동인도 회사.' },
          zh: { title: '荷兰东印度公司 (VOC)', desc: '垄断群岛香料的世界第一家跨国公司。', content: '<p class="mb-4">成立于1602年的荷兰东印度公司（VOC）是世界上第一家跨国公司，拥有自己的军队并为了香料垄断而殖民群岛。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 荷兰东印度公司。' }
        }
      }
    ]
  },

  'jepang': {
    names: { id: 'Jepang', en: 'Japan', ja: '日本', ko: '일본', zh: '日本' },
    flag: '🇯🇵',
    articles: [
      {
        id: 'jepang-samurai',
        langs: {
          id: { title: 'Era Samurai dan Keshogunan', desc: 'Masa kejayaan para ksatria samurai yang mendominasi politik dan budaya Jepang selama berabad-abad.', content: '<p class="mb-4">Samurai adalah kelas prajurit bangsawan yang mendominasi Jepang dari abad ke-12 hingga ke-19. Dipandu oleh kode etik <strong>Bushido</strong> (Jalan Ksatria), samurai menjunjung tinggi kesetiaan, kehormatan, dan kesiapan mati untuk tuan mereka.</p><p class="mb-4">Keshogunan Tokugawa (1603–1868) adalah puncak era samurai. Selama 265 tahun, Jepang ditutup dari dunia luar dalam kebijakan <em>Sakoku</em>. Negeri ini stabil namun terisolasi.</p><p class="mb-4">Era samurai berakhir dengan Restorasi Meiji 1868 ketika modernisasi Barat menggeser sistem feodal lama.</p>', sourceDomain: 'id.wikipedia.org', sourceSnippet: 'Wikipedia Indonesia — Samurai dan Keshogunan Jepang.' },
          en: { title: 'Samurai Era & Shogunate', desc: 'The golden age of samurai warriors who dominated Japanese politics and culture for centuries.', content: '<p class="mb-4">Samurai were the noble warrior class dominating Japan from the 12th to 19th centuries. Guided by <strong>Bushido</strong> (The Way of the Warrior), samurai upheld loyalty, honor, and readiness to die for their lord.</p><p class="mb-4">The Tokugawa Shogunate (1603–1868) was the peak of the samurai era. For 265 years, Japan was closed to the outside world under the <em>Sakoku</em> policy.</p><p class="mb-4">The samurai era ended with the 1868 Meiji Restoration when Western modernization replaced the old feudal system.</p>', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Wikipedia — Japanese Samurai Era.' },
          ja: { title: '武士の時代と江戸幕府', desc: '何世紀にもわたって日本の政治と文化を支配した武士の黄金時代。', content: '<p class="mb-4">武士は12世紀から19世紀にかけて日本を支配した武士貴族階級でした。<strong>武士道</strong>（武士の道）に導かれ、忠誠心、名誉、主君のために死ぬ覚悟を重んじました。</p><p class="mb-4">徳川幕府（1603–1868）は武士の時代の頂点でした。265年間、<em>鎖国</em>政策により日本は外界から閉ざされていました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 武士の時代。' },
          ko: { title: '사무라이 시대와 막부', desc: '수세기 동안 일본의 정치와 문화를 지배한 사무라이 전사들의 황금기.', content: '<p class="mb-4">사무라이는 12세기부터 19세기까지 일본을 지배한 귀족 전사 계급이었습니다. <strong>무사도</strong>(무사의 길)에 따라 충성, 명예, 주군을 위한 죽음의 준비를 중시했습니다.</p><p class="mb-4">도쿠가와 막부(1603–1868)는 사무라이 시대의 정점이었습니다. 265년 동안 <em>쇄국</em> 정책으로 일본은 외부 세계와 단절되었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 사무라이 시대.' },
          zh: { title: '武士时代与幕府', desc: '武士战士主导日本政治和文化数百年的黄金时代。', content: '<p class="mb-4">武士是从12世纪到19世纪主导日本的贵族战士阶级。以<strong>武士道</strong>（武士之路）为指引，武士重视忠诚、荣誉和为主君牺牲的准备。</p><p class="mb-4">德川幕府（1603–1868）是武士时代的顶峰。265年间，日本在<em>锁国</em>政策下与外界隔绝。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 武士时代。' }
        }
      },
      {
        id: 'jepang-meiji',
        langs: {
          id: { title: 'Restorasi Meiji', desc: 'Transformasi revolusioner Jepang dari negara feodal menjadi kekuatan industri modern dalam waktu singkat.', content: '<p class="mb-4">Restorasi Meiji (1868) adalah revolusi dari atas yang mengubah Jepang dalam waktu luar biasa singkat. Ketika Komodor Perry dari Amerika membuka paksa pelabuhan Jepang (1853), Jepang sadar ketinggalan zaman.</p><p class="mb-4">Dalam 40 tahun, Jepang membangun angkatan laut modern, sistem perkeretaapian, universitas, industri baja, dan konstitusi bergaya Barat. Slogan <em>"Wakon Yosai"</em> (Semangat Jepang, Keahlian Barat) menjadi panduan modernisasi.</p><p class="mb-4">Hasilnya mengejutkan dunia: Jepang mengalahkan Tiongkok (1895) dan Rusia (1905) — pertama kalinya bangsa Asia mengalahkan kekuatan Eropa.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Encyclopaedia Britannica — Restorasi Meiji Jepang.' },
          en: { title: 'Meiji Restoration', desc: 'Japan\'s revolutionary transformation from a feudal state to a modern industrial power in a remarkably short time.', content: '<p class="mb-4">The Meiji Restoration (1868) was a revolution from above that transformed Japan in a remarkably short time. When Commodore Perry forced open Japanese ports (1853), Japan realized it was falling behind.</p><p class="mb-4">Within 40 years, Japan built a modern navy, railway system, universities, steel industry, and Western-style constitution. The slogan <em>"Wakon Yosai"</em> (Japanese Spirit, Western Skills) guided modernization.</p><p class="mb-4">The results shocked the world: Japan defeated China (1895) and Russia (1905) — the first time an Asian nation defeated a European power.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Meiji Restoration.' },
          ja: { title: '明治維新', desc: '封建国家から近代工業大国への日本の革命的変革。', content: '<p class="mb-4">明治維新（1868年）は、日本を驚くほど短期間で変革した上からの革命でした。ペリー提督が日本の港を強制開港（1853年）した時、日本は遅れを取っていることに気づきました。</p><p class="mb-4">40年以内に、日本は近代的な海軍、鉄道網、大学、鉄鋼産業、西洋式憲法を構築しました。<em>「和魂洋才」</em>というスローガンが近代化を導きました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 明治維新。' },
          ko: { title: '메이지 유신', desc: '봉건 국가에서 근대 산업 강국으로의 일본의 혁명적 변혁.', content: '<p class="mb-4">메이지 유신(1868년)은 일본을 놀랍도록 짧은 시간에 변혁시킨 위로부터의 혁명이었습니다. 페리 제독이 일본 항구를 강제 개항(1853년)했을 때, 일본은 뒤처지고 있음을 깨달았습니다.</p><p class="mb-4">40년 만에 일본은 근대 해군, 철도망, 대학, 철강 산업, 서양식 헌법을 구축했습니다. <em>"화혼양재"</em> 슬로건이 근대화를 이끌었습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 메이지 유신.' },
          zh: { title: '明治维新', desc: '日本从封建国家到现代工业强国的革命性转变。', content: '<p class="mb-4">明治维新（1868年）是一场自上而下的革命，在极短时间内改变了日本。当佩里准将强行打开日本港口（1853年）时，日本意识到自己落后了。</p><p class="mb-4">40年内，日本建立了现代海军、铁路系统、大学、钢铁工业和西式宪法。<em>"和魂洋才"</em>的口号引导了现代化进程。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 明治维新。' }
        }
      },
      {
        id: 'jepang-hiroshima',
        langs: {
          id: { title: 'Bom Atom Hiroshima & Nagasaki', desc: 'Tragedi kemanusiaan terbesar dalam sejarah peperangan modern yang mengakhiri Perang Dunia II.', content: '<p class="mb-4">Pada 6 Agustus 1945, Amerika Serikat menjatuhkan bom atom pertama di Hiroshima, diikuti Nagasaki pada 9 Agustus 1945. Dalam sekejap, dua kota hancur lebur. Diperkirakan 129.000–226.000 jiwa meninggal.</p><p class="mb-4">Bom atom "Little Boy" (Hiroshima) dan "Fat Man" (Nagasaki) adalah senjata nuklir pertama yang digunakan dalam peperangan. Radiasi yang ditimbulkan terus membunuh selama bertahun-tahun setelahnya.</p><p class="mb-4">Jepang menyerah pada 15 Agustus 1945. Hiroshima kini menjadi simbol perdamaian dunia dengan Museum Perdamaian dan monumen Kubah Bom yang diakui UNESCO.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Pengeboman Atom Hiroshima dan Nagasaki.' },
          en: { title: 'Hiroshima & Nagasaki Atomic Bombs', desc: 'The greatest humanitarian tragedy in modern warfare history that ended World War II.', content: '<p class="mb-4">On August 6, 1945, the US dropped the first atomic bomb on Hiroshima, followed by Nagasaki on August 9. Two cities were instantly destroyed. An estimated 129,000–226,000 people died.</p><p class="mb-4">The "Little Boy" (Hiroshima) and "Fat Man" (Nagasaki) were the first nuclear weapons used in warfare. Radiation continued killing for years afterward.</p><p class="mb-4">Japan surrendered on August 15, 1945. Hiroshima is now a symbol of world peace with its Peace Museum and UNESCO-recognized A-Bomb Dome.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Hiroshima and Nagasaki Bombings.' },
          ja: { title: '広島・長崎への原爆投下', desc: '第二次世界大戦を終結させた現代戦争史上最大の人道的悲劇。', content: '<p class="mb-4">1945年8月6日、アメリカは広島に最初の原子爆弾を投下し、8月9日に長崎に続きました。2つの都市が瞬時に破壊され、推定12万9千〜22万6千人が死亡しました。</p><p class="mb-4">広島は今や、平和記念博物館とユネスコ認定の原爆ドームを持つ世界平和の象徴となっています。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 広島・長崎原爆。' },
          ko: { title: '히로시마 & 나가사키 원자폭탄', desc: '제2차 세계대전을 종식시킨 현대 전쟁사 최대의 인도주의적 비극.', content: '<p class="mb-4">1945년 8월 6일 미국이 히로시마에 첫 원자폭탄을 투하했고, 8월 9일 나가사키에 이어졌습니다. 두 도시가 순식간에 파괴되었고, 약 12만 9천~22만 6천 명이 사망했습니다.</p><p class="mb-4">히로시마는 이제 평화 기념관과 유네스코가 인정한 원폭 돔을 갖춘 세계 평화의 상징이 되었습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 히로시마 나가사키 원자폭탄.' },
          zh: { title: '广岛与长崎原子弹', desc: '结束第二次世界大战的现代战争史上最大的人道主义悲剧。', content: '<p class="mb-4">1945年8月6日，美国向广岛投下第一颗原子弹，8月9日又轰炸了长崎。两座城市瞬间被摧毁，估计有12.9万至22.6万人死亡。</p><p class="mb-4">广岛现在已成为世界和平的象征，拥有和平纪念馆和联合国教科文组织认定的原爆穹顶。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 广岛长崎原子弹。' }
        }
      },
      {
        id: 'jepang-edo',
        langs: {
          id: { title: 'Budaya Zaman Edo (Ukiyo-e & Geisha)', desc: 'Berkembangnya budaya pop tradisional Jepang selama masa isolasi.', content: '<p class="mb-4">Selama periode damai yang panjang di bawah Tokugawa (Edo), seni populer berkembang pesat. Ini termasuk teater Kabuki, seniman penghibur Geisha, dan lukisan cetak kayu Ukiyo-e (seperti "The Great Wave off Kanagawa").</p>', sourceDomain: 'metmuseum.org', sourceSnippet: 'Met Museum — Edo Period Art.' },
          en: { title: 'Edo Period Culture (Ukiyo-e & Geisha)', desc: 'The flourishing of traditional Japanese pop culture during isolation.', content: '<p class="mb-4">During the long peace under Tokugawa (Edo), popular arts thrived. This included Kabuki theater, Geisha entertainers, and Ukiyo-e woodblock prints like "The Great Wave off Kanagawa".</p>', sourceDomain: 'metmuseum.org', sourceSnippet: 'Met — Edo Culture.' },
          ja: { title: '江戸時代の文化 (浮世絵と芸者)', desc: '鎖国下の日本の伝統的ポップカルチャーの開花。', content: '<p class="mb-4">徳川（江戸）の長期にわたる平和の間に、大衆芸術が繁栄しました。これには歌舞伎、芸者、そして「神奈川沖浪裏」のような浮世絵版画が含まれます。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 江戸時代。' },
          ko: { title: '에도 시대 문화 (우키요에 및 게이샤)', desc: '고립 기간 동안 일본 전통 대중 문화의 번성.', content: '<p class="mb-4">도쿠가와(에도) 치하의 긴 평화 기간 동안 대중 예술이 번성했습니다. 여기에는 가부키 극장, 게이샤, "가나가와 해변의 높은 파도 아래"와 같은 우키요에 목판화가 포함됩니다。</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 에도 시대.' },
          zh: { title: '江户时代文化 (浮世绘与艺伎)', desc: '孤立时期日本传统流行文化的繁荣。', content: '<p class="mb-4">在德川（江户）的长期和平期间，大众艺术繁荣发展。这包括歌舞伎、艺伎和《神奈川冲浪里》等浮世绘木版画。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 江户时代。' }
        }
      },
      {
        id: 'jepang-fukushima',
        langs: {
          id: { title: 'Bencana Gempa & Tsunami Tōhoku 2011', desc: 'Gempa bumi paling kuat yang tercatat dalam sejarah Jepang.', content: '<p class="mb-4">Pada 11 Maret 2011, gempa berkekuatan 9,1 SR memicu tsunami setinggi 40 meter yang menyapu pesisir timur laut Jepang. Bencana ini juga menyebabkan kebocoran fatal di Pembangkit Listrik Tenaga Nuklir Fukushima Daiichi.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 2011 Japan Earthquake and Tsunami.' },
          en: { title: '2011 Tōhoku Earthquake and Tsunami', desc: 'The most powerful earthquake ever recorded in Japan.', content: '<p class="mb-4">On March 11, 2011, a 9.1 magnitude quake triggered a 40-meter tsunami devastating Japan\'s northeast coast. It also caused nuclear meltdowns at the Fukushima Daiichi Nuclear Power Plant.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 2011 Tōhoku.' },
          ja: { title: '東日本大震災', desc: '日本史上最大規模の地震。', content: '<p class="mb-4">2011年3月11日、マグニチュード9.1の地震が発生し、高さ40メートルの津波が東北地方の沿岸を襲いました。また、福島第一原子力発電所事故も引き起こしました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 東日本大震災。' },
          ko: { title: '2011년 도호쿠 지진 및 쓰나미', desc: '일본 역사상 가장 강력한 지진.', content: '<p class="mb-4">2011년 3월 11일, 규모 9.1의 지진이 발생하여 40m 높이의 쓰나미가 일본 북동부 해안을 황폐화시켰습니다. 또한 후쿠시마 제1원자력 발전소 사고를 일으켰습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 도호쿠 지방 태평양 해역 지진.' },
          zh: { title: '2011年日本东北地方太平洋近海地震', desc: '日本历史上记录到的最强地震。', content: '<p class="mb-4">2011年3月11日，9.1级地震引发了高达40米的海啸，摧毁了日本东北海岸，并导致福岛第一核电站发生核泄漏。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 311大地震。' }
        }
      },
      {
        id: 'jepang-heian',
        langs: {
          id: { title: 'Zaman Heian & The Tale of Genji', desc: 'Masa keemasan budaya keraton Jepang dan lahirnya novel pertama di dunia.', content: '<p class="mb-4">Zaman Heian (794–1185) dikenal karena seni, puisi, dan budayanya. Pada masa ini, Murasaki Shikibu, seorang wanita bangsawan, menulis "The Tale of Genji", yang diakui secara luas sebagai novel psikologis pertama di dunia.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Heian Period & Tale of Genji.' },
          en: { title: 'Heian Period & The Tale of Genji', desc: 'Golden age of Japanese court culture and the world\'s first novel.', content: '<p class="mb-4">The Heian Period (794–1185) is noted for its art and poetry. Noblewoman Murasaki Shikibu wrote "The Tale of Genji" here, widely considered the world\'s first psychological novel.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Heian.' },
          ja: { title: '平安時代と源氏物語', desc: '日本の宮廷文化の黄金時代と世界初の小説。', content: '<p class="mb-4">平安時代（794–1185）は芸術と詩で知られています。貴族の紫式部はここで、世界初の心理小説とされる『源氏物語』を執筆しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 平安時代。' },
          ko: { title: '헤이안 시대와 겐지 이야기', desc: '일본 궁정 문화의 황금기와 세계 최초의 소설.', content: '<p class="mb-4">헤이안 시대(794–1185)는 예술과 시로 유명합니다. 귀족 여성 무라사키 시키부는 이곳에서 세계 최초의 심리 소설로 여겨지는 "겐지 이야기"를 썼습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 헤이안 시대.' },
          zh: { title: '平安时代与源氏物语', desc: '日本宫廷文化的黄金时代和世界第一部小说。', content: '<p class="mb-4">平安时代（794–1185）以其艺术和诗歌闻名。贵族妇女紫式部在这里写下了《源氏物语》，被广泛认为是世界上第一部心理小说。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 平安时代。' }
        }
      },
      {
        id: 'jepang-kamikaze',
        langs: {
          id: { title: 'Angin Topan Kamikaze', desc: 'Angin dewa yang menyelamatkan Jepang dari invasi Kekaisaran Mongol.', content: '<p class="mb-4">Pada 1274 dan 1281, Kubilai Khan dari Kekaisaran Mongol mengirim armada raksasa untuk menaklukkan Jepang. Kedua armada tersebut dihancurkan oleh topan dahsyat yang oleh Jepang disebut "Kamikaze" (Angin Dewa).</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — Mongol Invasions of Japan.' },
          en: { title: 'Kamikaze Typhoons', desc: 'Divine winds that saved Japan from the Mongol Empire invasions.', content: '<p class="mb-4">In 1274 and 1281, Kublai Khan sent massive fleets to conquer Japan. Both fleets were destroyed by massive typhoons which the Japanese called "Kamikaze" (Divine Wind).</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'Nat Geo — Mongol Invasion.' },
          ja: { title: '元寇と神風', desc: 'モンゴル帝国の侵攻から日本を救った神風。', content: '<p class="mb-4">1274年と1281年、フビライ・ハンは日本を征服するために巨大な艦隊を派遣しました。両艦隊は日本人が「神風」と呼んだ猛烈な台風によって壊滅しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 元寇。' },
          ko: { title: '카미카제 태풍', desc: '몽골 제국의 침략으로부터 일본을 구한 신풍.', content: '<p class="mb-4">1274년과 1281년 쿠빌라이 칸은 일본을 정복하기 위해 거대한 함대를 보냈습니다. 두 함대 모두 일본인들이 "카미카제"(신풍)라고 부르는 거대한 태풍에 의해 파괴되었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 여몽연합군의 일본 원정.' },
          zh: { title: '神风台风', desc: '从蒙古帝国入侵中拯救日本的神圣之风。', content: '<p class="mb-4">1274年和1281年，忽必烈汗派遣庞大舰队征服日本。两支舰队都被日本人称为"神风"的猛烈台风摧毁。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 元日战争。' }
        }
      },
      {
        id: 'jepang-russo',
        langs: {
          id: { title: 'Perang Rusia-Jepang (1904-1905)', desc: 'Kemenangan Asia pertama atas kekuatan Eropa di era modern.', content: '<p class="mb-4">Jepang menghancurkan Armada Baltik Rusia dalam Pertempuran Tsushima, mengejutkan dunia. Ini adalah kali pertama sebuah negara Asia mengalahkan kekuatan besar Eropa di era modern, mengukuhkan Jepang sebagai kekuatan dunia.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Russo-Japanese War.' },
          en: { title: 'Russo-Japanese War (1904-1905)', desc: 'First Asian victory over a European power in the modern era.', content: '<p class="mb-4">Japan annihilated Russia\'s Baltic Fleet at Tsushima, shocking the world. It was the first time an Asian nation defeated a major European power in the modern era.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Russo-Japanese.' },
          ja: { title: '日露戦争 (1904-1905)', desc: '近代においてアジアがヨーロッパの国に勝利した初の事例。', content: '<p class="mb-4">日本は対馬沖でロシアのバルチック艦隊を全滅させ、世界に衝撃を与えました。これは近代においてアジアの国がヨーロッパの大国を破った初めての出来事でした。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 日露戦争。' },
          ko: { title: '러일 전쟁 (1904-1905)', desc: '근대 아시아 국가가 유럽 강대국을 상대로 거둔 첫 승리.', content: '<p class="mb-4">일본은 쓰시마 해전에서 러시아 발트 함대를 전멸시켜 세계를 놀라게 했습니다. 근대에 아시아 국가가 유럽 강대국을 격파한 것은 이번이 처음이었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 러일 전쟁.' },
          zh: { title: '日俄战争 (1904-1905)', desc: '现代亚洲首次战胜欧洲强国。', content: '<p class="mb-4">日本在对马海战中歼灭了俄罗斯波罗的海舰队，震惊了世界。这是现代亚洲国家首次击败欧洲大国。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 日俄战争。' }
        }
      },
      {
        id: 'jepang-sekigahara',
        langs: {
          id: { title: 'Pertempuran Sekigahara', desc: 'Pertempuran epik 1600 yang menyatukan Jepang di bawah Tokugawa.', content: '<p class="mb-4">Terjadi pada 21 Oktober 1600, pasukan Timur pimpinan Tokugawa Ieyasu mengalahkan pasukan Barat. Kemenangan ini mengakhiri perang saudara dan memulai era Keshogunan Tokugawa yang damai selama 260 tahun.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Battle of Sekigahara.' },
          en: { title: 'Battle of Sekigahara', desc: 'The epic 1600 battle uniting Japan under Tokugawa.', content: '<p class="mb-4">Fought on Oct 21, 1600, Tokugawa Ieyasu\'s Eastern army defeated the Western army. This victory ended civil wars and started the 260-year peaceful Tokugawa Shogunate.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Sekigahara.' },
          ja: { title: '関ヶ原の戦い', desc: '徳川の下で日本を統一した1600年の壮大な戦い。', content: '<p class="mb-4">1600年10月21日に行われ、徳川家康の東軍が西軍を破りました。この勝利により内戦が終わり、260年続く江戸幕府が始まりました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 関ヶ原の戦い。' },
          ko: { title: '세키가하라 전투', desc: '도쿠가와 아래 일본을 통일한 1600년의 서사적인 전투.', content: '<p class="mb-4">1600년 10월 21일 벌어진 전투에서 도쿠가와 이에야스의 동군이 서군을 격파했습니다. 이 승리로 내전이 끝나고 260년간의 도쿠가와 막부가 시작되었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 세키가하라 전투.' },
          zh: { title: '关原之战', desc: '1600年将日本统一在德川统治下的史诗般战役。', content: '<p class="mb-4">发生于1600年10月21日，德川家康的东军击败了西军。这场胜利结束了内战，开启了长达260年的德川幕府时代。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 关原之战。' }
        }
      },
      {
        id: 'jepang-sengoku',
        langs: {
          id: { title: 'Zaman Sengoku Jidai', desc: 'Era peperangan sipil berdarah antar panglima perang (daimyo).', content: '<p class="mb-4">Berlangsung dari abad ke-15 hingga ke-17, ini adalah masa kekacauan sosial dan konflik militer konstan di Jepang, di mana tokoh legendaris seperti Oda Nobunaga dan Toyotomi Hideyoshi muncul untuk menyatukan negeri.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Sengoku Period.' },
          en: { title: 'Sengoku Jidai', desc: 'The era of bloody civil wars between warlords (daimyo).', content: '<p class="mb-4">Lasting from the 15th to 17th century, it was a time of social upheaval and constant military conflict in Japan, giving rise to legends like Oda Nobunaga.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Warring States Japan.' },
          ja: { title: '戦国時代', desc: '大名間の血みどろの内戦時代。', content: '<p class="mb-4">15世紀から17世紀にかけて、日本における社会的混乱と絶え間ない軍事衝突の時代であり、織田信長や豊臣秀吉のような伝説的な人物が登場しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 戦国時代。' },
          ko: { title: '센고쿠 시대', desc: '군벌(다이묘) 간의 유혈 내전 시대.', content: '<p class="mb-4">15세기부터 17세기까지 지속된 이 시대는 일본의 사회적 격변과 끊임없는 군사적 충돌의 시기로 오다 노부나가와 같은 전설적인 인물들이 등장했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 센고쿠 시대.' },
          zh: { title: '战国时代', desc: '军阀（大名）之间血腥内战的时代。', content: '<p class="mb-4">从15世纪持续到17世纪，这是日本社会动荡和军事冲突不断的时期，织田信长等传奇人物由此崛起。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 日本战国时代。' }
        }
      }
    ]
  },

  'mesir': {
    names: { id: 'Mesir Kuno', en: 'Ancient Egypt', ja: '古代エジプト', ko: '고대 이집트', zh: '古埃及' },
    flag: '🇪🇬',
    articles: [
      {
        id: 'mesir-piramida',
        langs: {
          id: { title: 'Piramida Agung Giza', desc: 'Satu-satunya dari Tujuh Keajaiban Dunia Kuno yang masih berdiri, dibangun sekitar 2560 SM.', content: '<p class="mb-4">Piramida Agung Giza dibangun sebagai makam Firaun Khufu sekitar 2560 SM. Terdiri dari sekitar 2,3 juta blok batu dengan berat rata-rata 2,5 ton setiap bloknya. Tanpa mesin modern, ribuan pekerja membangunnya selama 20 tahun.</p><p class="mb-4">Tingginya mencapai 146,5 meter saat dibangun — menjadikannya bangunan tertinggi di dunia selama 3.800 tahun hingga Katedral Lincoln selesai pada 1311 M.</p><p class="mb-4">Hingga kini, cara persis pembangunan piramida masih menjadi misteri dan diperdebatkan para arkeolog dunia.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Encyclopaedia Britannica — Piramida Agung Giza.' },
          en: { title: 'Great Pyramid of Giza', desc: 'The only surviving Wonder of the Ancient World, built around 2560 BC.', content: '<p class="mb-4">The Great Pyramid of Giza was built as Pharaoh Khufu\'s tomb around 2560 BC. It consists of approximately 2.3 million stone blocks averaging 2.5 tons each. Without modern machinery, thousands of workers built it over 20 years.</p><p class="mb-4">At 146.5 meters tall when built, it was the world\'s tallest structure for 3,800 years until Lincoln Cathedral was completed in 1311 CE.</p><p class="mb-4">The exact method of pyramid construction remains a mystery debated by archaeologists worldwide.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Great Pyramid of Giza.' },
          ja: { title: 'ギザの大ピラミッド', desc: '紀元前2560年頃に建設された、古代世界の七不思議のうち現存する唯一のもの。', content: '<p class="mb-4">ギザの大ピラミッドは紀元前2560年頃にファラオ・クフの墓として建設されました。平均2.5トンの石块约230万個で構成されています。近代的な機械なしに、数千人の労働者が20年かけて建設しました。</p><p class="mb-4">建設時の高さは146.5メートルで、1311年にリンカーン大聖堂が完成するまで3,800年間、世界最高の建造物でした。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — ギザの大ピラミッド。' },
          ko: { title: '기자의 대피라미드', desc: '기원전 2560년경에 건설된 고대 세계 7대 불가사의 중 유일하게 남아있는 것.', content: '<p class="mb-4">기자의 대피라미드는 기원전 2560년경 파라오 쿠푸의 무덤으로 건설되었습니다. 평균 2.5톤의 돌블록 약 230만 개로 구성되어 있습니다. 현대 기계 없이 수천 명의 노동자가 20년에 걸쳐 건설했습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 기자의 대피라미드.' },
          zh: { title: '吉萨大金字塔', desc: '建于约公元前2560年，古代世界七大奇迹中唯一幸存的建筑。', content: '<p class="mb-4">吉萨大金字塔建于约公元前2560年，作为法老胡夫的陵墓。由约230万块平均重2.5吨的石块组成。没有现代机械，数千名工人花了20年建造。</p><p class="mb-4">建造时高146.5米，是世界最高建筑，直到1311年林肯大教堂完工，这一纪录保持了3800年。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 吉萨大金字塔。' }
        }
      },
      {
        id: 'mesir-firaun',
        langs: {
          id: { title: 'Para Firaun Legendaris', desc: 'Kisah Ramses II, Tutankhamun, dan Cleopatra — para penguasa Mesir yang namanya abadi dalam sejarah.', content: '<p class="mb-4"><strong>Ramses II</strong> (1279–1213 SM) adalah firaun terbesar Mesir, memerintah selama 66 tahun. Ia membangun lebih banyak monumen dari firaun manapun, termasuk kuil megah Abu Simbel. Dikenal sebagai "Ramses Agung."</p><p class="mb-4"><strong>Tutankhamun</strong> menjadi firaun usia 9 tahun dan meninggal usia 18. Namun penemuannya menjadi fenomenal — pada 1922, Howard Carter menemukan makamnya yang utuh dengan harta karun senilai miliaran dolar.</p><p class="mb-4"><strong>Cleopatra VII</strong> adalah firaun terakhir Mesir — cerdas, fasih 9 bahasa, dan punya hubungan romantis dengan Julius Caesar dan Mark Antony sebelum Mesir jatuh ke tangan Romawi.</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — Para Firaun Legendaris Mesir Kuno.' },
          en: { title: 'Legendary Pharaohs', desc: 'The stories of Ramses II, Tutankhamun, and Cleopatra — Egyptian rulers whose names are immortalized in history.', content: '<p class="mb-4"><strong>Ramses II</strong> (1279–1213 BC) was Egypt\'s greatest pharaoh, ruling for 66 years. He built more monuments than any other pharaoh, including the magnificent Abu Simbel temple.</p><p class="mb-4"><strong>Tutankhamun</strong> became pharaoh at age 9 and died at 18. But his discovery was phenomenal — in 1922, Howard Carter found his intact tomb with billions worth of treasures.</p><p class="mb-4"><strong>Cleopatra VII</strong> was Egypt\'s last pharaoh — brilliant, fluent in 9 languages, with romantic ties to Julius Caesar and Mark Antony before Egypt fell to Rome.</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — Legendary Pharaohs of Ancient Egypt.' },
          ja: { title: '伝説のファラオたち', desc: 'ラムセス2世、ツタンカーメン、クレオパトラ — 歴史に名を刻んだエジプトの支配者たち。', content: '<p class="mb-4"><strong>ラムセス2世</strong>（紀元前1279–1213年）は66年間統治したエジプト最大のファラオで、アブ・シンベル神殿を含む多くの記念碑を建設しました。</p><p class="mb-4"><strong>ツタンカーメン</strong>は9歳でファラオになり18歳で死亡しましたが、1922年のハワード・カーターによる彼の無傷の墓の発見は世界的な現象となりました。</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — 古代エジプトの伝説のファラオ。' },
          ko: { title: '전설적인 파라오들', desc: '람세스 2세, 투탕카멘, 클레오파트라 — 역사에 이름을 새긴 이집트의 통치자들.', content: '<p class="mb-4"><strong>람세스 2세</strong>(기원전 1279–1213년)는 66년간 통치한 이집트 최대의 파라오로, 아부 심벨 신전을 포함한 수많은 기념물을 건설했습니다.</p><p class="mb-4"><strong>투탕카멘</strong>은 9세에 파라오가 되어 18세에 사망했지만, 1922년 하워드 카터의 무덤 발견은 세계적인 현상이 되었습니다.</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — 고대 이집트의 전설적인 파라오들.' },
          zh: { title: '传奇法老们', desc: '拉美西斯二世、图坦卡蒙和克利奥帕特拉——在历史上留下永恒印记的埃及统治者。', content: '<p class="mb-4"><strong>拉美西斯二世</strong>（公元前1279–1213年）是统治了66年的埃及最伟大法老，建造了包括阿布辛拜勒神庙在内的众多纪念碑。</p><p class="mb-4"><strong>图坦卡蒙</strong>9岁登基，18岁去世，但1922年霍华德·卡特发现其完整陵墓成为世界现象。</p><p class="mb-4"><strong>克利奥帕特拉七世</strong>是埃及最后一位法老——才华横溢，精通9种语言，与凯撒和安东尼有过浪漫关系，直到埃及落入罗马人之手。</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — 古埃及传奇法老。' }
        }
      },
      {
        id: 'mesir-hieroglif',
        langs: {
          id: { title: 'Hieroglif — Tulisan Suci Mesir', desc: 'Sistem tulisan piktografis yang digunakan selama 3.500 tahun dan menjadi kunci memahami peradaban Mesir Kuno.', content: '<p class="mb-4">Hieroglif (dari bahasa Yunani: "tulisan suci") adalah sistem tulisan bergambar yang dikembangkan Mesir sekitar 3200 SM. Terdiri dari lebih dari 700 tanda yang mewakili suara, kata, atau konsep.</p><p class="mb-4">Selama berabad-abad hieroglif menjadi misteri yang tak terpecahkan — hingga penemuan <strong>Batu Rosetta</strong> pada 1799. Batu ini memuat teks yang sama dalam tiga bahasa: hieroglif, demotik, dan Yunani kuno.</p><p class="mb-4">Thomas Young dan Jean-François Champollion berhasil menguraikan hieroglif pada 1822, membuka kembali jendela menuju peradaban Mesir kuno yang kaya.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Hieroglif Mesir Kuno dan Batu Rosetta.' },
          en: { title: 'Hieroglyphs — Sacred Egyptian Writing', desc: 'The pictographic writing system used for 3,500 years that became the key to understanding Ancient Egyptian civilization.', content: '<p class="mb-4">Hieroglyphs (from Greek: "sacred writing") are Egypt\'s pictographic writing system developed around 3200 BC. They consist of over 700 signs representing sounds, words, or concepts.</p><p class="mb-4">For centuries, hieroglyphs remained an unsolved mystery — until the discovery of the <strong>Rosetta Stone</strong> in 1799. This stone contains the same text in three scripts: hieroglyphic, demotic, and ancient Greek.</p><p class="mb-4">Thomas Young and Jean-François Champollion successfully deciphered hieroglyphs in 1822, reopening the window to rich ancient Egyptian civilization.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Egyptian Hieroglyphs and Rosetta Stone.' },
          ja: { title: 'ヒエログリフ — エジプトの神聖文字', desc: '3500年間使用され、古代エジプト文明を理解する鍵となった象形文字体系。', content: '<p class="mb-4">ヒエログリフ（ギリシャ語で「神聖な文字」）は紀元前3200年頃に発展したエジプトの象形文字体系です。音、言葉、概念を表す700以上の記号で構成されています。</p><p class="mb-4">1799年のロゼッタ・ストーンの発見まで、ヒエログリフは解読不能な謎でした。1822年にシャンポリオンが解読に成功しました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — エジプトのヒエログリフ。' },
          ko: { title: '상형문자 — 이집트의 신성한 글자', desc: '3500년간 사용되어 고대 이집트 문명 이해의 열쇠가 된 상형 문자 체계.', content: '<p class="mb-4">상형문자(그리스어로 "신성한 글자")는 기원전 3200년경에 발전한 이집트의 그림문자 체계입니다. 소리, 단어, 개념을 나타내는 700개 이상의 기호로 구성됩니다.</p><p class="mb-4">1799년 로제타석 발견까지 상형문자는 풀리지 않는 수수께끼였습니다. 1822년 샹폴리옹이 해독에 성공했습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 이집트 상형문자.' },
          zh: { title: '象形文字——埃及神圣的书写', desc: '使用了3500年，成为理解古埃及文明关键的象形文字体系。', content: '<p class="mb-4">象形文字（希腊语意为"神圣的书写"）是约公元前3200年发展起来的埃及图形文字体系，由700多个代表声音、词语或概念的符号组成。</p><p class="mb-4">几个世纪来，象形文字是个未解之谜，直到1799年发现罗塞塔石碑。1822年商博良成功解读了象形文字。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 埃及象形文字。' }
        }
      },
      {
        id: 'mesir-akhenaten',
        langs: {
          id: { title: 'Akhenaten & Revolusi Monoteisme', desc: 'Firaun radikal yang mengubah agama Mesir Kuno sesaat.', content: '<p class="mb-4">Firaun Akhenaten (ayah Tutankhamun) menghapus politeisme tradisional dan dewa Amun, lalu memaksa seluruh Mesir menyembah satu dewa tunggal: Aten (Cakram Matahari). Setelah ia wafat, monumennya dihancurkan dan agama lama dipulihkan.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Akhenaten and Monotheism.' },
          en: { title: 'Akhenaten & Monotheism', desc: 'The radical Pharaoh who briefly changed Egyptian religion.', content: '<p class="mb-4">Pharaoh Akhenaten abolished traditional polytheism, forcing Egypt to worship a single god: Aten (the Sun Disk). After his death, his monuments were destroyed and the old religion restored.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Akhenaten.' },
          ja: { title: 'アクエンアテンと一神教', desc: 'エジプトの宗教を一時的に変えた急進的なファラオ。', content: '<p class="mb-4">アクエンアテン（ツタンカーメンの父）は伝統的な多神教を廃止し、唯一神アテン（太陽円盤）を崇拝させました。彼の死後、古い宗教が復活しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — アクエンアテン。' },
          ko: { title: '아크나톤과 일신교', desc: '이집트 종교를 일시적으로 바꾼 급진적인 파라오.', content: '<p class="mb-4">아크나톤(투탕카멘의 아버지)은 전통적인 다신교를 폐지하고 유일신 아톤(태양 원반)을 숭배하게 했습니다. 그의 사후 오래된 종교가 회복되었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 아크나톤.' },
          zh: { title: '阿肯那顿与一神教', desc: '短暂改变埃及宗教的激进法老。', content: '<p class="mb-4">阿肯那顿法老废除了传统的多神教，强迫埃及人崇拜唯一的神：阿顿（太阳圆盘）。他死后，旧宗教被恢复。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 阿肯那顿。' }
        }
      },
      {
        id: 'mesir-alexandria',
        langs: {
          id: { title: 'Perpustakaan Besar Aleksandria', desc: 'Pusat pengetahuan terbesar di dunia kuno.', content: '<p class="mb-4">Dibangun pada masa Dinasti Ptolemeus (sekitar 285 SM), perpustakaan ini mengumpulkan hingga setengah juta gulungan papirus. Di sini, Eratosthenes berhasil menghitung keliling bumi dengan sangat akurat.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Library of Alexandria.' },
          en: { title: 'Great Library of Alexandria', desc: 'The largest center of knowledge in the ancient world.', content: '<p class="mb-4">Built during the Ptolemaic Dynasty (c. 285 BC), it held up to half a million papyrus scrolls. Here, Eratosthenes accurately calculated the Earth\'s circumference.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Library of Alexandria.' },
          ja: { title: 'アレクサンドリア図書館', desc: '古代世界最大の知識の中心地。', content: '<p class="mb-4">プトレマイオス朝時代（紀元前285年頃）に建設され、最大50万巻のパピルスが収められていました。ここでエラトステネスは地球の円周を正確に計算しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — アレクサンドリア図書館。' },
          ko: { title: '알렉산드리아 도서관', desc: '고대 세계 최대의 지식 중심지.', content: '<p class="mb-4">프톨레마이오스 왕조(기원전 285년경)에 건설되었으며 최대 50만 권의 파피루스 두루마리를 소장했습니다. 여기서 에라토스테네스는 지구의 둘레를 정확하게 계산했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 알렉산드리아 도서관.' },
          zh: { title: '亚历山大图书馆', desc: '古代世界最大的知识中心。', content: '<p class="mb-4">建于托勒密王朝（约公元前285年），馆藏多达50万卷纸莎草纸。在这里，埃拉托色尼准确计算出了地球的周长。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 亚历山大图书馆。' }
        }
      },
      {
        id: 'mesir-hatshepsut',
        langs: {
          id: { title: 'Firaun Wanita Hatshepsut', desc: 'Penguasa wanita paling sukses di Mesir Kuno.', content: '<p class="mb-4">Berkuasa pada abad ke-15 SM, Hatshepsut menyatakan dirinya sebagai Firaun (raja, bukan ratu) dan sering digambarkan mengenakan janggut palsu. Ia membangun kembali jalur perdagangan kuno dan membangun kuil megah Deir el-Bahari.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Hatshepsut.' },
          en: { title: 'Female Pharaoh Hatshepsut', desc: 'The most successful female ruler of Ancient Egypt.', content: '<p class="mb-4">Ruling in the 15th century BC, Hatshepsut declared herself Pharaoh (king, not queen) and wore a false beard. She re-established trade networks and built the grand Deir el-Bahari temple.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Hatshepsut.' },
          ja: { title: '女性ファラオ・ハトシェプスト', desc: '古代エジプトで最も成功した女性統治者。', content: '<p class="mb-4">紀元前15世紀に統治したハトシェプストは自らをファラオ（女王ではなく王）と宣言し、付け髭をつけていました。彼女は壮大なデル・エル・バハリ神殿を建設しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ハトシェプスト。' },
          ko: { title: '여성 파라오 하트셉수트', desc: '고대 이집트에서 가장 성공적인 여성 통치자.', content: '<p class="mb-4">기원전 15세기에 통치한 하트셉수트는 자신을 파라오(여왕이 아닌 왕)로 선포하고 가짜 수염을 달았습니다. 그녀는 웅장한 데이르 엘-바하리 신전을 지었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 하트셉수트.' },
          zh: { title: '女法老哈特谢普苏特', desc: '古埃及最成功的女性统治者。', content: '<p class="mb-4">在公元前15世纪统治，哈特谢普苏特宣布自己为法老（国王，而不是女王）并戴着假胡须。她建造了宏伟的代尔巴哈里神庙。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 哈特谢普苏特。' }
        }
      },
      {
        id: 'mesir-lembah-raja',
        langs: {
          id: { title: 'Lembah Para Raja', desc: 'Makam rahasia bawah tanah para Firaun di era Kerajaan Baru.', content: '<p class="mb-4">Untuk menghindari perampok makam yang sering menjarah piramida, para firaun (seperti Tutankhamun dan Ramses) mulai dikubur secara rahasia di makam bawah tanah yang dipahat di bebatuan kering tebing Thebes (kini Luxor).</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — Valley of the Kings.' },
          en: { title: 'Valley of the Kings', desc: 'Secret underground tombs of New Kingdom Pharaohs.', content: '<p class="mb-4">To avoid grave robbers who frequently looted pyramids, pharaohs (like King Tut and Ramses) were buried secretly in rock-cut tombs in the dry cliffs of Thebes (now Luxor).</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'Nat Geo — Valley of the Kings.' },
          ja: { title: '王家の谷', desc: '新王国時代のファラオたちの秘密の地下墓地。', content: '<p class="mb-4">ピラミッドを略奪する墓泥棒を避けるため、ファラオたちはテーベ（現在のルクソール）の乾燥した崖に掘られた岩窟墓に秘密裏に埋葬されました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 王家の谷。' },
          ko: { title: '왕가의 계곡', desc: '신왕국 시대 파라오들의 비밀 지하 무덤.', content: '<p class="mb-4">피라미드를 약탈하는 도굴꾼들을 피하기 위해 파라오들은 테베(현 룩소르)의 마른 절벽에 파낸 암굴 무덤에 비밀리에 묻혔습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 왕가의 계곡.' },
          zh: { title: '帝王谷', desc: '新王国时期法老们的秘密地下陵墓。', content: '<p class="mb-4">为了躲避经常掠夺金字塔的盗墓者，法老们被秘密埋葬在底比斯（今卢克索）干燥悬崖上开凿的岩陵中。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 帝王谷。' }
        }
      },
      {
        id: 'mesir-mumi',
        langs: {
          id: { title: 'Proses Mumifikasi', desc: 'Teknik pengawetan mayat agar jiwa dapat hidup abadi di alam baka.', content: '<p class="mb-4">Orang Mesir Kuno percaya tubuh fisik harus utuh agar roh bisa bertahan hidup di akhirat. Organ dalam (kecuali jantung) dikeluarkan dan disimpan dalam Guci Kanopik, lalu tubuh dikeringkan dengan garam natron selama 70 hari sebelum dibungkus kain linen.</p>', sourceDomain: 'si.edu', sourceSnippet: 'Smithsonian — Egyptian Mummies.' },
          en: { title: 'Mummification Process', desc: 'Body preservation techniques for eternal life in the afterlife.', content: '<p class="mb-4">Ancient Egyptians believed the physical body must remain intact for the spirit to survive in the afterlife. Organs (except the heart) were removed, and the body was dried with natron salt for 70 days.</p>', sourceDomain: 'si.edu', sourceSnippet: 'Smithsonian — Mummies.' },
          ja: { title: 'ミイラ作りのプロセス', desc: '魂が死後の世界で永遠に生きるための遺体保存技術。', content: '<p class="mb-4">古代エジプト人は、魂が死後の世界で生き残るためには肉体が無傷でなければならないと信じていました。内臓（心臓を除く）を取り出し、ナトロン塩で70日間乾燥させました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ミイラ。' },
          ko: { title: '미라 제작 과정', desc: '사후 세계에서 영원한 삶을 위한 시신 보존 기술.', content: '<p class="mb-4">고대 이집트인들은 영혼이 사후 세계에서 살아남으려면 육체가 온전해야 한다고 믿었습니다. 장기(심장 제외)를 제거하고 나트론 소금으로 70일 동안 건조시켰습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 미라.' },
          zh: { title: '木乃伊制作过程', desc: '为了在来世获得永生的遗体保存技术。', content: '<p class="mb-4">古埃及人相信，为了让灵魂在来世存活，肉体必须保持完整。内脏（除心脏外）被取出，身体用泡碱盐干燥70天。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 木乃伊。' }
        }
      },
      {
        id: 'mesir-nil',
        langs: {
          id: { title: 'Sungai Nil: Urat Nadi Mesir', desc: 'Sungai terpanjang di dunia yang menjadi fondasi peradaban Mesir Kuno.', content: '<p class="mb-4">Tanpa Sungai Nil, Mesir hanya akan menjadi gurun pasir. Banjir tahunan dari sungai ini (inundasi) meninggalkan lumpur hitam yang sangat subur, memungkinkan pertanian masif yang menopang seluruh kekaisaran Firaun.</p>', sourceDomain: 'nationalgeographic.org', sourceSnippet: 'National Geographic — Nile River.' },
          en: { title: 'Nile River: The Lifeblood', desc: 'The longest river forming the foundation of Ancient Egyptian civilization.', content: '<p class="mb-4">Without the Nile, Egypt would be a desert. Its annual flooding deposited rich black silt, allowing massive agriculture that sustained the entire Pharaonic empire.</p>', sourceDomain: 'nationalgeographic.org', sourceSnippet: 'Nat Geo — Nile.' },
          ja: { title: 'ナイル川：エジプトの生命線', desc: '古代エジプト文明の基盤となった世界最長の川。', content: '<p class="mb-4">ナイル川がなければエジプトは砂漠でした。毎年の洪水によって豊かな黒土が運ばれ、ファラオの帝国全体を支える大規模な農業が可能になりました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ナイル川。' },
          ko: { title: '나일강: 이집트의 생명선', desc: '고대 이집트 문명의 토대가 된 세계에서 가장 긴 강.', content: '<p class="mb-4">나일강이 없었다면 이집트는 사막이었을 것입니다. 매년 발생하는 홍수로 비옥한 검은 흙이 쌓여 파라오 제국 전체를 유지하는 대규모 농업이 가능했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 나일강.' },
          zh: { title: '尼罗河：埃及的命脉', desc: '奠定古埃及文明基础的世界最长河流。', content: '<p class="mb-4">如果没有尼罗河，埃及将是一片沙漠。其每年的洪水带来了肥沃的黑色淤泥，使得大规模农业成为可能，维持了整个法老帝国。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 尼罗河。' }
        }
      },
      {
        id: 'mesir-suez',
        langs: {
          id: { title: 'Terusan Suez', desc: 'Proyek rekayasa modern yang mengubah arah perdagangan global.', content: '<p class="mb-4">Dibuka pada 1869, terusan sepanjang 193 km ini menghubungkan Laut Mediterania ke Laut Merah. Hal ini membuat kapal tidak perlu lagi mengelilingi seluruh benua Afrika untuk berlayar dari Eropa ke Asia.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Suez Canal.' },
          en: { title: 'Suez Canal', desc: 'The modern engineering project that changed global trade.', content: '<p class="mb-4">Opened in 1869, this 193km canal connects the Mediterranean to the Red Sea, eliminating the need for ships to navigate around the entire African continent to reach Asia.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Suez Canal.' },
          ja: { title: 'スエズ運河', desc: '世界貿易を変えた近代工学プロジェクト。', content: '<p class="mb-4">1869年に開通した193kmの運河で、地中海と紅海を結び、船がアジアへ行くためにアフリカ大陸を迂回する必要をなくしました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — スエズ運河。' },
          ko: { title: '수에즈 운하', desc: '세계 무역을 바꾼 현대 공학 프로젝트.', content: '<p class="mb-4">1869년에 개통된 193km의 운하로 지중해와 홍해를 연결하여 선박이 아시아에 도달하기 위해 아프리카 대륙을 우회할 필요를 없앴습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 수에즈 운하.' },
          zh: { title: '苏伊士运河', desc: '改变全球贸易的现代工程项目。', content: '<p class="mb-4">这条193公里长的运河于1869年开通，连接地中海和红海，使船只无需绕过整个非洲大陆即可到达亚洲。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 苏伊士运河。' }
        }
      }
    ]
  },

  'romawi': {
    names: { id: 'Romawi Kuno', en: 'Ancient Rome', ja: '古代ローマ', ko: '고대 로마', zh: '古罗马' },
    flag: '🏛️',
    articles: [
      {
        id: 'romawi-julius-caesar',
        langs: {
          id: { title: 'Julius Caesar', desc: 'Jenderal dan diktator Roma yang mengubah Republik menjadi cikal bakal Kekaisaran dan namanya abadi sepanjang masa.', content: '<p class="mb-4">Gaius Julius Caesar (100–44 SM) adalah sosok paling berpengaruh dalam sejarah Roma. Jenderal brilian yang menaklukkan Galia (Prancis modern) dalam 8 tahun, ia juga penulis, orator, dan politisi kelas dunia.</p><p class="mb-4">Ketika Caesar menyeberangi Sungai Rubicon (49 SM) dengan pasukannya — melanggar hukum Roma — ia memulai perang saudara melawan Pompey dan Senat. Ia menang dan menjadi diktator Roma.</p><p class="mb-4">Pada 15 Maret 44 SM (Ides of March), Caesar dibunuh oleh 23 tusukan dari sekelompok senator yang dipimpin Brutus dan Cassius. Kematiannya justru mengakhiri Republik dan melahirkan Kekaisaran Romawi.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Encyclopaedia Britannica — Julius Caesar.' },
          en: { title: 'Julius Caesar', desc: 'Rome\'s general and dictator who transformed the Republic into the precursor of the Empire — his name immortalized forever.', content: '<p class="mb-4">Gaius Julius Caesar (100–44 BC) was the most influential figure in Roman history. A brilliant general who conquered Gaul (modern France) in 8 years, he was also a world-class writer, orator, and politician.</p><p class="mb-4">When Caesar crossed the Rubicon River (49 BC) with his army — violating Roman law — he started a civil war against Pompey and the Senate. He won and became Rome\'s dictator.</p><p class="mb-4">On March 15, 44 BC (the Ides of March), Caesar was assassinated with 23 stab wounds by a group of senators led by Brutus and Cassius. His death paradoxically ended the Republic and birthed the Roman Empire.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Julius Caesar.' },
          ja: { title: 'ユリウス・カエサル', desc: '共和国を帝国の前身に変えたローマの将軍と独裁者。', content: '<p class="mb-4">ガイウス・ユリウス・カエサル（紀元前100–44年）はローマ史上最も影響力のある人物でした。8年でガリア（現代のフランス）を征服した天才的な将軍であり、世界クラスの作家、雄弁家、政治家でもありました。</p><p class="mb-4">紀元前44年3月15日（イードゥス・マルティアエ）、ブルートゥスとカッシウスが率いる元老院議員グループによって23カ所を刺されて暗殺されました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — ユリウス・カエサル。' },
          ko: { title: '율리우스 카이사르', desc: '공화국을 제국의 전신으로 변모시킨 로마의 장군이자 독재자.', content: '<p class="mb-4">가이우스 율리우스 카이사르(기원전 100–44년)는 로마 역사에서 가장 영향력 있는 인물이었습니다. 8년 만에 갈리아(현대 프랑스)를 정복한 천재적인 장군이자 세계적인 작가, 연설가, 정치가였습니다.</p><p class="mb-4">기원전 44년 3월 15일(이두스 마르티아이), 브루투스와 카시우스가 이끄는 원로원 의원 그룹에 의해 23번 찔려 암살되었습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 율리우스 카이사르.' },
          zh: { title: '尤利乌斯·凯撒', desc: '将共和国转变为帝国前身的罗马将军和独裁者。', content: '<p class="mb-4">盖乌斯·尤利乌斯·凯撒（公元前100–44年）是罗马历史上最具影响力的人物。他是一位天才将军，在8年内征服了高卢（现代法国），同时也是世界级的作家、演说家和政治家。</p><p class="mb-4">公元前44年3月15日（三月望日），凯撒被布鲁图斯和卡西乌斯领导的元老院议员群体刺以23刀后遇刺身亡。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 尤利乌斯·凯撒。' }
        }
      },
      {
        id: 'romawi-colosseum',
        langs: {
          id: { title: 'Colosseum — Arena Raksasa Roma', desc: 'Amfiteater terbesar sepanjang masa yang menampung 80.000 penonton untuk pertarungan gladiator yang legendaris.', content: '<p class="mb-4">Colosseum (Flavian Amphitheatre) adalah amfiteater terbesar dalam sejarah manusia, dibangun antara 70–80 M di Roma. Mampu menampung 50.000–80.000 penonton, bangunan oval raksasa ini adalah puncak teknik konstruksi Romawi.</p><p class="mb-4">Di sini digelar pertarungan gladiator (munera), perburuan binatang buas (venationes), dan bahkan pertempuran laut buatan (naumachiae) dengan mengisi arena dengan air. Diperkirakan lebih dari 400.000 orang dan jutaan hewan mati di arena ini selama berabad-abad.</p><p class="mb-4">Meski rusak akibat gempa dan penjarahan, 2/3 bangunan asli masih berdiri. Colosseum kini menjadi monumen paling ikonik di dunia, dikunjungi 7 juta wisatawan per tahun.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Colosseum Roma.' },
          en: { title: 'The Colosseum — Rome\'s Giant Arena', desc: 'The largest amphitheater ever built, seating 80,000 spectators for legendary gladiatorial combat.', content: '<p class="mb-4">The Colosseum (Flavian Amphitheatre) is the largest amphitheater in human history, built between 70–80 CE in Rome. Capable of seating 50,000–80,000 spectators, this giant oval structure is the pinnacle of Roman construction engineering.</p><p class="mb-4">Here took place gladiatorial fights (munera), wild beast hunts (venationes), and even mock naval battles (naumachiae) by flooding the arena. Over 400,000 people and millions of animals are estimated to have died here over the centuries.</p><p class="mb-4">Though damaged by earthquakes and looting, 2/3 of the original structure still stands. The Colosseum is now the world\'s most iconic monument, visited by 7 million tourists per year.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Roman Colosseum.' },
          ja: { title: 'コロッセオ — ローマの巨大闘技場', desc: '伝説の剣闘士の戦いのために8万人の観客を収容した、史上最大の円形闘技場。', content: '<p class="mb-4">コロッセオ（フラウィウス円形闘技場）は70〜80年頃にローマに建設された人類史上最大の円形闘技場です。5万〜8万人の観客を収容でき、ローマ建設工学の粋を集めた建物です。</p><p class="mb-4">現在も元の構造の3分の2が残っており、年間700万人の観光客が訪れる世界最も象徴的な記念碑となっています。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — ローマのコロッセオ。' },
          ko: { title: '콜로세움 — 로마의 거대한 경기장', desc: '전설적인 검투사 싸움을 위해 8만 명의 관중을 수용한 역사상 가장 큰 원형 경기장.', content: '<p class="mb-4">콜로세움(플라비우스 원형 경기장)은 70~80년경 로마에 건설된 인류 역사상 가장 큰 원형 경기장입니다. 5만~8만 명의 관중을 수용할 수 있으며, 로마 건설 공학의 정점입니다.</p><p class="mb-4">원래 구조물의 2/3가 여전히 남아 있으며, 연간 700만 명의 관광객이 방문하는 세계에서 가장 상징적인 기념물이 되었습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 로마 콜로세움.' },
          zh: { title: '罗马斗兽场 — 罗马的巨型竞技场', desc: '有史以来最大的圆形剧场，可容纳8万名观众观看传奇的角斗士战斗。', content: '<p class="mb-4">斗兽场（弗拉维安圆形剧场）是人类历史上最大的圆形剧场，建于公元70-80年间。可容纳5-8万名观众，是罗马建筑工程的顶峰。</p><p class="mb-4">尽管因地震和掠夺受损，原始结构的2/3仍然矗立。斗兽场现在是世界上最具标志性的纪念碑，每年有700万游客参观。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 罗马斗兽场。' }
        }
      },
      {
        id: 'romawi-akuaduk',
        langs: {
          id: { title: 'Akuaduk & Teknik Sipil', desc: 'Sistem pengairan canggih penopang metropolitan kuno.', content: '<p class="mb-4">Bangsa Romawi adalah insinyur ulung. Mereka membangun jaringan akuaduk (saluran air) sepanjang ratusan kilometer menggunakan gravitasi konstan untuk memasok air bersih ke pemandian umum, air mancur, dan rumah pribadi di Roma.</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — Roman Aqueducts.' },
          en: { title: 'Roman Aqueducts', desc: 'Advanced water systems sustaining an ancient metropolis.', content: '<p class="mb-4">Romans were master engineers, building hundreds of kilometers of aqueducts using precise gravity gradients to supply fresh water to public baths, fountains, and private homes.</p>', sourceDomain: 'ng.com', sourceSnippet: 'Nat Geo — Aqueducts.' },
          ja: { title: 'ローマの水道橋', desc: '古代の巨大都市を支えた高度な水供給システム。', content: '<p class="mb-4">ローマ人は優れた技術者であり、重力を利用して公衆浴場や家庭に真水を供給するために何百キロにも及ぶ水道橋を建設しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ローマ水道。' },
          ko: { title: '로마의 수도교', desc: '고대 거대 도시를 유지한 첨단 수도 시스템.', content: '<p class="mb-4">로마인들은 뛰어난 기술자였으며 중력을 이용하여 공중 목욕탕과 가정에 담수를 공급하기 위해 수백 킬로미터의 수도교를 건설했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 로마 수도.' },
          zh: { title: '罗马高架渠', desc: '维持古代大都市的先进供水系统。', content: '<p class="mb-4">罗马人是优秀的工程师，他们利用重力建造了数百公里的高架渠，为公共浴池和家庭供应淡水。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 罗马高架渠。' }
        }
      },
      {
        id: 'romawi-augustus',
        langs: {
          id: { title: 'Augustus & Pax Romana', desc: 'Kaisar pertama Roma dan era perdamaian selama 200 tahun.', content: '<p class="mb-4">Octavianus (Augustus) mengakhiri seabad perang saudara dan mendirikan Kekaisaran Romawi pada 27 SM. Masa pemerintahannya memulai "Pax Romana" (Perdamaian Romawi), sebuah periode stabilitas ekonomi dan budaya yang belum pernah terjadi sebelumnya.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Augustus.' },
          en: { title: 'Augustus & Pax Romana', desc: 'Rome\'s first Emperor and the 200-year era of peace.', content: '<p class="mb-4">Octavian (Augustus) ended a century of civil war and founded the Roman Empire in 27 BC, starting the "Pax Romana" (Roman Peace), a period of unprecedented stability.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Pax Romana.' },
          ja: { title: 'アウグストゥスとパクス・ロマーナ', desc: 'ローマ初代皇帝と200年にわたる平和な時代。', content: '<p class="mb-4">オクタウィアヌス（アウグストゥス）は紀元前27年にローマ帝国を建国し、かつてない安定期である「パクス・ロマーナ」（ローマの平和）を始めました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — アウグストゥス。' },
          ko: { title: '아우구스투스와 팍스 로마나', desc: '로마의 초대 황제와 200년의 평화 시대.', content: '<p class="mb-4">옥타비아누스(아우구스투스)는 기원전 27년 로마 제국을 세우고 유례없는 안정기인 "팍스 로마나"(로마의 평화)를 시작했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 아우구스투스.' },
          zh: { title: '奥古斯都与罗马和平', desc: '罗马第一位皇帝和200年的和平时代。', content: '<p class="mb-4">屋大维（奥古斯都）在公元前27年建立了罗马帝国，开启了史无前例的稳定时期——"罗马和平"。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 奥古斯都。' }
        }
      },
      {
        id: 'romawi-keruntuhan',
        langs: {
          id: { title: 'Keruntuhan Romawi Barat (476 M)', desc: 'Akhir dari Kekaisaran yang berkuasa selama 1.000 tahun.', content: '<p class="mb-4">Setelah berabad-abad dilanda krisis ekonomi, korupsi, dan invasi suku-suku Jermanik (Goth, Vandal, Hun), Kekaisaran Romawi Barat resmi runtuh ketika raja barbar Odoacer menggulingkan kaisar terakhir, Romulus Augustulus pada 476 M.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Fall of Rome.' },
          en: { title: 'Fall of the Western Roman Empire', desc: 'The end of a 1,000-year ruling Empire.', content: '<p class="mb-4">Following centuries of economic crisis and Germanic invasions, the Western Empire fell when barbarian king Odoacer deposed the last emperor, Romulus Augustulus, in 476 AD.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Fall of Rome.' },
          ja: { title: '西ローマ帝国の滅亡', desc: '1000年続いた帝国の終焉。', content: '<p class="mb-4">数世紀にわたる経済危機とゲルマン人の侵略の後、476年に蛮族の王オドアケルが最後の皇帝ロムルス・アウグストゥルスを退位させ、西ローマ帝国は滅亡しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 西ローマ帝国。' },
          ko: { title: '서로마 제국의 멸망', desc: '1000년 지속된 제국의 종말.', content: '<p class="mb-4">수세기에 걸친 경제 위기와 게르만족의 침략 이후, 476년 야만인 왕 오도아케르가 마지막 황제 로물루스 아우구스투스를 폐위시키면서 서로마 제국은 멸망했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 서로마 제국.' },
          zh: { title: '西罗马帝国的灭亡', desc: '1000年帝国的终结。', content: '<p class="mb-4">经过几个世纪的经济危机和日耳曼人入侵，西罗马帝国在公元476年蛮族国王奥多亚塞废黜最后一位皇帝罗慕路斯·奥古斯都后灭亡。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 西罗马帝国。' }
        }
      },
      {
        id: 'romawi-konstantin',
        langs: {
          id: { title: 'Konstantin Agung & Kristenisasi', desc: 'Kaisar Romawi pertama yang memeluk agama Kristen.', content: '<p class="mb-4">Konstantin melegalisasi kekristenan lewat Dekrit Milan (313 M) dan mengakhiri penganiayaan panjang. Ia juga memindahkan ibu kota kekaisaran dari Roma ke kota timur Byzantium, yang ia ganti namanya menjadi Konstantinopel.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Constantine I.' },
          en: { title: 'Constantine the Great', desc: 'The first Roman Emperor to embrace Christianity.', content: '<p class="mb-4">Constantine legalized Christianity via the Edict of Milan (313 AD). He also moved the imperial capital from Rome east to Byzantium, renaming it Constantinople.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Constantine.' },
          ja: { title: 'コンスタンティヌス大帝', desc: 'キリスト教を受け入れた最初のローマ皇帝。', content: '<p class="mb-4">コンスタンティヌスはミラノ勅令（313年）によってキリスト教を公認しました。また、首都をローマからビザンティウム（コンスタンティノープル）に移しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — コンスタンティヌス1世。' },
          ko: { title: '콘스탄티누스 대제', desc: '기독교를 받아들인 최초의 로마 황제.', content: '<p class="mb-4">콘스탄티누스는 밀라노 칙령(313년)을 통해 기독교를 합법화했습니다. 또한 제국의 수도를 로마에서 비잔티움(콘스탄티노폴리스)으로 옮겼습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 콘스탄티누스 1세.' },
          zh: { title: '君士坦丁大帝', desc: '第一位接受基督教的罗马皇帝。', content: '<p class="mb-4">君士坦丁通过《米兰敕令》（公元313年）使基督教合法化。他还将帝国首都从罗马迁至拜占庭（君士坦丁堡）。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 君士坦丁大帝。' }
        }
      },
      {
        id: 'romawi-legiun',
        langs: {
          id: { title: 'Legiun Romawi', desc: 'Mesin militer paling mematikan dan disiplin di dunia kuno.', content: '<p class="mb-4">Kesuksesan penaklukan Romawi sangat bergantung pada Legiun—pasukan profesional yang sangat terlatih. Mereka memelopori taktik canggih seperti formasi "Testudo" (kura-kura) dengan perisai berlapis untuk melindungi diri dari panah musuh.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Roman Legion.' },
          en: { title: 'The Roman Legion', desc: 'The most lethal and disciplined military machine of the ancient world.', content: '<p class="mb-4">Roman conquests relied heavily on the Legions—highly trained professional armies. They pioneered advanced tactics like the "Testudo" (tortoise) shield formation.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Legion.' },
          ja: { title: 'ローマ軍団 (レギオン)', desc: '古代世界で最も規律正しい軍事組織。', content: '<p class="mb-4">ローマの征服は、高度に訓練された職業軍隊である軍団に依存していました。彼らは「テストゥド（亀）」と呼ばれる盾の陣形などの高度な戦術を開拓しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ローマ軍団。' },
          ko: { title: '로마 군단', desc: '고대 세계에서 가장 규율 잡힌 군사 조직.', content: '<p class="mb-4">로마의 정복은 고도로 훈련된 직업 군대인 군단에 의존했습니다. 그들은 방패를 이용한 "테스투도(거북이)" 진형과 같은 고도의 전술을 개척했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 로마 군단.' },
          zh: { title: '罗马军团', desc: '古代世界最纪律严明的军事机器。', content: '<p class="mb-4">罗马的征服在很大程度上依赖于军团——训练有素的职业军队。他们开创了先进的战术，如"龟甲阵"盾牌编队。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 罗马军团。' }
        }
      },
      {
        id: 'romawi-pantheon',
        langs: {
          id: { title: 'Kuil Pantheon', desc: 'Mahakarya arsitektur Romawi yang atap kubahnya tak tertandingi.', content: '<p class="mb-4">Dibangun kembali oleh Kaisar Hadrian sekitar 126 M, Pantheon adalah kuil untuk semua dewa Roma. Hingga hari ini, kubah utamanya tetap menjadi kubah beton tak bertulang terbesar di dunia—sebuah bukti jeniusnya beton tahan lama Romawi.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Pantheon.' },
          en: { title: 'The Pantheon', desc: 'Roman architectural masterpiece with an unparalleled dome.', content: '<p class="mb-4">Rebuilt by Emperor Hadrian around 126 AD, it remains the world\'s largest unreinforced concrete dome to this day—a testament to the genius of Roman durable concrete.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Pantheon.' },
          ja: { title: 'パンテオン', desc: '比類のないドームを持つローマ建築の傑作。', content: '<p class="mb-4">126年頃にハドリアヌス帝によって再建されたパンテオンは、今日に至るまで世界最大の無筋コンクリートドームを誇っています。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — パンテオン。' },
          ko: { title: '판테온', desc: '비할 데 없는 돔을 가진 로마 건축의 걸작.', content: '<p class="mb-4">서기 126년경 하드리아누스 황제에 의해 재건된 판테온은 오늘날까지도 세계에서 가장 큰 무근 콘크리트 돔으로 남아 있습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 판테온.' },
          zh: { title: '万神殿', desc: '拥有无与伦比穹顶的罗马建筑杰作。', content: '<p class="mb-4">约公元126年由哈德良皇帝重建，至今它仍是世界上最大的无钢筋混凝土穹顶，证明了罗马混凝土的天才。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 万神殿。' }
        }
      },
      {
        id: 'romawi-pompeii',
        langs: {
          id: { title: 'Kehancuran Pompeii (79 M)', desc: 'Kota Romawi yang membeku dalam waktu akibat abu vulkanik.', content: '<p class="mb-4">Ketika Gunung Vesuvius meletus pada 79 M, kota Pompeii dan Herculaneum terkubur di bawah abu setebal 4-6 meter. Saat digali berabad-abad kemudian, kota ini memberikan gambaran paling detail tentang kehidupan sehari-hari Romawi Kuno.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Pompeii.' },
          en: { title: 'Destruction of Pompeii (79 AD)', desc: 'A Roman city frozen in time by volcanic ash.', content: '<p class="mb-4">When Mount Vesuvius erupted in 79 AD, Pompeii was buried under 4-6 meters of ash. Excavated centuries later, it provides the most detailed snapshot of ancient Roman daily life.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Pompeii.' },
          ja: { title: 'ポンペイの滅亡', desc: '火山灰によって時が止まったローマの都市。', content: '<p class="mb-4">西暦79年にヴェスヴィオ山が噴火した際、ポンペイは火山灰の下に埋もれました。発掘されたこの都市は、古代ローマの日常生活の最も詳細な姿を伝えています。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ポンペイ。' },
          ko: { title: '폼페이의 최후', desc: '화산재에 의해 시간이 멈춘 로마 도시.', content: '<p class="mb-4">기원후 79년 베수비오 화산이 폭발했을 때 폼페이는 화산재 아래 묻혔습니다. 발굴된 이 도시는 고대 로마 일상 생활의 가장 생생한 모습을 제공합니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 폼페이.' },
          zh: { title: '庞贝城的毁灭', desc: '被火山灰冻结在时间里的罗马城市。', content: '<p class="mb-4">公元79年维苏威火山爆发时，庞贝城被埋在火山灰下。发掘出的这座城市提供了古罗马日常生活的生动画面。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 庞贝城。' }
        }
      },
      {
        id: 'romawi-punic',
        langs: {
          id: { title: 'Perang Punisia & Hannibal', desc: 'Perang eksistensial antara Roma dan Kartago memperebutkan Mediterania.', content: '<p class="mb-4">Dalam Perang Punisia Kedua (218 SM), jenderal Kartago legendaris, Hannibal Barca, memimpin pasukan gajah melintasi pegunungan Alpen untuk menyerang Italia. Meski sering kalah, Roma akhirnya menghancurkan Kartago dan menguasai laut Mediterania.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Punic Wars.' },
          en: { title: 'Punic Wars & Hannibal', desc: 'The existential war between Rome and Carthage over the Mediterranean.', content: '<p class="mb-4">In the Second Punic War (218 BC), Carthaginian general Hannibal famously led elephants across the Alps into Italy. Despite early defeats, Rome eventually destroyed Carthage.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Punic.' },
          ja: { title: 'ポエニ戦争とハンニバル', desc: '地中海を巡るローマとカルタゴの存亡をかけた戦争。', content: '<p class="mb-4">第二次ポエニ戦争（紀元前218年）で、カルタゴの将軍ハンニバルは象を連れてアルプスを越えイタリアに侵攻しました。最終的にローマが勝利しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — ポエニ戦争。' },
          ko: { title: '포에니 전쟁과 한니발', desc: '지중해를 둘러싼 로마와 카르타고의 생존 전쟁.', content: '<p class="mb-4">제2차 포에니 전쟁(기원전 218년)에서 카르타고의 장군 한니발은 코끼리를 이끌고 알프스를 넘어 이탈리아를 침공했습니다. 결국 로마가 승리했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 포에니 전쟁.' },
          zh: { title: '布匿战争与汉尼拔', desc: '罗马与迦太基争夺地中海的生存之战。', content: '<p class="mb-4">在第二次布匿战争（公元前218年）中，迦太基将军汉尼拔率领大象越过阿尔卑斯山入侵意大利。罗马最终获胜并摧毁了迦太基。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 布匿战争。' }
        }
      }
    ]
  },

  'tiongkok': {
    names: { id: 'Tiongkok', en: 'China', ja: '中国', ko: '중국', zh: '中国' },
    flag: '🇨🇳',
    articles: [
      {
        id: 'tiongkok-tembok',
        langs: {
          id: { title: 'Tembok Besar Tiongkok', desc: 'Salah satu proyek konstruksi terbesar dalam sejarah manusia, dibangun selama lebih dari 2.000 tahun untuk melindungi dari invasi utara.', content: '<p class="mb-4">Tembok Besar Tiongkok adalah serangkaian tembok dan benteng yang dibangun di seluruh wilayah utara Tiongkok. Pembangunan dimulai sejak abad ke-7 SM dan berlanjut hingga Dinasti Ming (1368–1644 M).</p><p class="mb-4">Panjang totalnya mencapai lebih dari 21.000 km — cukup untuk mengelilingi Bumi setengah kali. Dibangun oleh jutaan pekerja paksa, termasuk tentara, petani, dan tahanan. Diperkirakan ratusan ribu pekerja meninggal saat pembangunan dan dimakamkan di dalam tembok.</p><p class="mb-4">UNESCO menetapkan Tembok Besar sebagai Warisan Dunia pada 1987. Meski mitos "terlihat dari luar angkasa" tidak benar, Tembok Besar tetap menjadi simbol ketekunan dan kekuatan peradaban Tiongkok.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Tembok Besar Tiongkok.' },
          en: { title: 'Great Wall of China', desc: 'One of the largest construction projects in human history, built over 2,000 years to protect against northern invasions.', content: '<p class="mb-4">The Great Wall of China is a series of walls and fortifications built across northern China. Construction started in the 7th century BC and continued through the Ming Dynasty (1368–1644 CE).</p><p class="mb-4">Its total length exceeds 21,000 km — enough to wrap around Earth half a time. Built by millions of forced laborers including soldiers, farmers, and prisoners. Hundreds of thousands are estimated to have died and been buried within the wall.</p><p class="mb-4">UNESCO designated the Great Wall a World Heritage Site in 1987. Though the myth of seeing it from space is untrue, it remains a symbol of Chinese civilization\'s perseverance and strength.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Great Wall of China.' },
          ja: { title: '万里の長城', desc: '北方からの侵略を防ぐために2000年以上かけて建設された、人類史上最大の建設プロジェクトの一つ。', content: '<p class="mb-4">万里の長城は中国北部に建設された一連の城壁と要塞です。建設は紀元前7世紀に始まり、明朝（1368–1644年）まで続きました。</p><p class="mb-4">総延長は21,000km以上に及び、地球を半周できる長さです。ユネスコは1987年に世界遺産に指定しました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 万里の長城。' },
          ko: { title: '만리장성', desc: '북방 침략으로부터 보호하기 위해 2000년 이상에 걸쳐 건설된 인류 역사상 가장 큰 건설 프로젝트 중 하나.', content: '<p class="mb-4">만리장성은 중국 북부에 건설된 일련의 성벽과 요새입니다. 건설은 기원전 7세기에 시작되어 명나라(1368–1644년)까지 계속되었습니다.</p><p class="mb-4">총 길이는 21,000km를 초과하며, 지구를 반 바퀴 돌 수 있는 길이입니다. 유네스코는 1987년 세계문화유산으로 지정했습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 만리장성.' },
          zh: { title: '万里长城', desc: '为抵御北方入侵而历时2000多年建造的人类历史上最大的建设工程之一。', content: '<p class="mb-4">万里长城是建于中国北部的一系列城墙和要塞。建设从公元前7世纪开始，一直持续到明朝（1368–1644年）。</p><p class="mb-4">其总长度超过21,000公里，足以绕地球半圈。联合国教科文组织于1987年将其列为世界遗产。尽管从太空看见长城的说法是神话，但它仍然是中华文明坚韧与力量的象征。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 万里长城。' }
        }
      },
      {
        id: 'tiongkok-dinasti-tang',
        langs: {
          id: { title: 'Dinasti Tang — Zaman Keemasan', desc: 'Era paling gemilang Tiongkok dalam seni, sastra, teknologi, dan perdagangan internasional (618–907 M).', content: '<p class="mb-4">Dinasti Tang (618–907 M) dianggap sebagai zaman keemasan peradaban Tiongkok. Ibu kotanya, Chang\'an (kini Xi\'an), adalah kota terbesar dan paling kosmopolit di dunia dengan populasi lebih dari 1 juta jiwa — pusat Jalur Sutra yang ramai.</p><p class="mb-4">Di era Tang, puisi Tiongkok mencapai puncaknya. Li Bai dan Du Fu adalah dua penyair terbesar yang karya-karyanya masih dipelajari hingga kini. Percetakan blok kayu juga pertama kali berkembang di era ini.</p><p class="mb-4">Tang juga dikenal toleran secara agama — Islam, Kristen Nestorian, Zoroastrianisme, dan Buddha berkembang berdampingan di Chang\'an. Wanita di era Tang menikmati kebebasan yang luar biasa untuk zamannya.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Dinasti Tang Tiongkok.' },
          en: { title: 'Tang Dynasty — The Golden Age', desc: 'China\'s most glorious era in arts, literature, technology, and international trade (618–907 CE).', content: '<p class="mb-4">The Tang Dynasty (618–907 CE) is considered the golden age of Chinese civilization. Its capital Chang\'an (now Xi\'an) was the world\'s largest and most cosmopolitan city with a population over 1 million — the bustling center of the Silk Road.</p><p class="mb-4">In the Tang era, Chinese poetry reached its peak. Li Bai and Du Fu are the two greatest poets whose works are still studied today. Block printing also first developed in this era.</p><p class="mb-4">Tang was also religiously tolerant — Islam, Nestorian Christianity, Zoroastrianism, and Buddhism flourished together in Chang\'an.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Tang Dynasty China.' },
          ja: { title: '唐朝 — 黄金時代', desc: '芸術、文学、技術、国際貿易における中国最も輝かしい時代（618–907年）。', content: '<p class="mb-4">唐朝（618–907年）は中国文明の黄金時代とされています。首都の長安（現在の西安）は人口100万人以上を擁する世界最大かつ最も国際色豊かな都市で、シルクロードの中心でした。</p><p class="mb-4">唐代には中国詩が頂点に達しました。李白と杜甫は現在も学ばれる最大の詩人です。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 唐朝。' },
          ko: { title: '당나라 — 황금 시대', desc: '예술, 문학, 기술 및 국제 무역에서 중국의 가장 찬란한 시대(618–907년).', content: '<p class="mb-4">당나라(618–907년)는 중국 문명의 황금시대로 여겨집니다. 수도 장안(현재의 시안)은 인구 100만 명 이상의 세계 최대의 국제적인 도시로 실크로드의 중심지였습니다.</p><p class="mb-4">당나라 시대에 중국 시가 정점에 달했습니다. 이백과 두보는 오늘날까지 연구되는 최대의 시인입니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 당나라.' },
          zh: { title: '唐朝 — 黄金时代', desc: '中国在艺术、文学、技术和国际贸易方面最辉煌的时代（618–907年）。', content: '<p class="mb-4">唐朝（618–907年）被认为是中华文明的黄金时代。其首都长安（今西安）是世界上最大、最具国际性的城市，人口超过100万，是丝绸之路的繁荣中心。</p><p class="mb-4">唐代中国诗歌达到顶峰。李白和杜甫是至今仍被研究的两位最伟大的诗人。雕版印刷也在这一时代首次发展起来。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — 唐朝。' }
        }
      },
      {
        id: 'tiongkok-candu',
        langs: {
          id: { title: 'Perang Candu', desc: 'Awal dari "Abad Penghinaan" bagi Kekaisaran Qing.', content: '<p class="mb-4">Pada abad ke-19 (1839), Kerajaan Inggris menyelundupkan opium (candu) ke Tiongkok untuk menutupi defisit perdagangan teh. Saat Tiongkok menyita opium itu, Inggris menyatakan perang. Tiongkok kalah, dipaksa membuka pelabuhan dan menyerahkan pulau Hong Kong ke Inggris.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Opium Wars.' },
          en: { title: 'The Opium Wars', desc: 'The start of the "Century of Humiliation" for the Qing Empire.', content: '<p class="mb-4">In 1839, Britain smuggled opium into China. When China seized it, Britain declared war. China lost, was forced to open ports, and ceded Hong Kong island to the British.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Opium Wars.' },
          ja: { title: 'アヘン戦争', desc: '清帝国の「屈辱の世紀」の始まり。', content: '<p class="mb-4">1839年、イギリスは中国にアヘンを密輸しました。中国がそれを没収するとイギリスは宣戦布告し、勝利したイギリスは香港を割譲させました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — アヘン戦争。' },
          ko: { title: '아편 전쟁', desc: '청 제국의 "굴욕의 세기" 시작.', content: '<p class="mb-4">1839년 영국은 중국에 아편을 밀수했습니다. 중국이 이를 몰수하자 영국은 전쟁을 선포했고 승리한 영국은 홍콩을 할양받았습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 아편 전쟁.' },
          zh: { title: '鸦片战争', desc: '清帝国"百年国耻"的开端。', content: '<p class="mb-4">1839年，英国向中国走私鸦片。当中国没收鸦片时，英国宣战。中国战败，被迫开放通商口岸并将香港岛割让给英国。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 鸦片战争。' }
        }
      },
      {
        id: 'tiongkok-cheng-ho',
        langs: {
          id: { title: 'Armada Harta Laksamana Cheng Ho', desc: 'Ekspedisi maritim raksasa yang mendahului pelayaran Eropa.', content: '<p class="mb-4">Tujuh dekade sebelum Columbus, Laksamana Zheng He (Cheng Ho) dari Dinasti Ming memimpin armada kapal kayu terbesar di dunia—beberapa kapalnya berukuran lebih dari 120 meter. Ia melakukan 7 pelayaran melintasi Samudra Hindia hingga ke Afrika Timur (1405-1433).</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — Zheng He.' },
          en: { title: 'Zheng He\'s Treasure Fleet', desc: 'Massive maritime expeditions predating European voyages.', content: '<p class="mb-4">Seven decades before Columbus, Admiral Zheng He led the world\'s largest wooden fleet—some ships over 120 meters long—on 7 voyages across the Indian Ocean to East Africa (1405-1433).</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'Nat Geo — Zheng He.' },
          ja: { title: '鄭和の宝船艦隊', desc: 'ヨーロッパの航海に先駆けた大規模な海洋遠征。', content: '<p class="mb-4">コロンブスより70年前、明の鄭和提督は世界最大の木造艦隊を率いて、インド洋を越えて東アフリカまでの7回の航海を行いました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 鄭和。' },
          ko: { title: '정화의 원정', desc: '유럽의 항해보다 앞선 대규모 해양 원정.', content: '<p class="mb-4">콜럼버스보다 70년 앞서, 명나라의 정화 제독은 세계 최대의 목조 함대를 이끌고 인도양을 가로질러 동아프리카까지 7차례 항해했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 정화 (명나라).' },
          zh: { title: '郑和下西洋', desc: '早于欧洲航海的大规模海上远征。', content: '<p class="mb-4">在哥伦布之前70年，明朝海军将领郑和率领当时世界上最大的木制舰队，七次穿越印度洋远达东非。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 郑和下西洋。' }
        }
      },
      {
        id: 'tiongkok-empat-penemuan',
        langs: {
          id: { title: 'Empat Penemuan Besar', desc: 'Inovasi kuno Tiongkok yang mengubah dunia selamanya.', content: '<p class="mb-4">Peradaban Tiongkok bertanggung jawab atas Empat Penemuan Besar: Pembuatan Kertas (Dinasti Han), Mesin Cetak (Dinasti Tang), Bubuk Mesiu (Dinasti Tang abad ke-9), dan Kompas Magnetik. Keempatnya memacu lompatan besar dalam peradaban global manusia.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Chinese Inventions.' },
          en: { title: 'Four Great Inventions', desc: 'Ancient Chinese innovations that forever changed the world.', content: '<p class="mb-4">China is responsible for the Four Great Inventions: Papermaking, Printing, Gunpowder, and the Magnetic Compass. All four spurred massive leaps in global human civilization.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Inventions.' },
          ja: { title: '四大発明', desc: '世界を永遠に変えた古代中国の革新。', content: '<p class="mb-4">中国は四大発明（製紙、印刷、火薬、羅針盤）を生み出し、人類の文明に飛躍的な進歩をもたらしました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 四大発明。' },
          ko: { title: '4대 발명품', desc: '세계를 영원히 바꾼 고대 중국의 혁신.', content: '<p class="mb-4">중국은 종이, 인쇄술, 화약, 나침반의 4대 발명품을 만들어 인류 문명의 비약적인 발전을 촉진했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 중국의 4대 발명.' },
          zh: { title: '四大发明', desc: '永远改变世界的古代中国创新。', content: '<p class="mb-4">中国孕育了四大发明：造纸术、印刷术、火药和指南针，极大地推动了全球人类文明的进步。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 四大发明。' }
        }
      },
      {
        id: 'tiongkok-han',
        langs: {
          id: { title: 'Dinasti Han', desc: 'Zaman konsolidasi kebudayaan Tiongkok yang menjadi identitas bangsa.', content: '<p class="mb-4">Berkuasa lebih dari 400 tahun (202 SM – 220 M), Dinasti Han sangat sukses dan stabil sehingga hingga hari ini mayoritas etnis di Tiongkok secara resmi menyebut diri mereka "Suku Han", dan aksara mereka disebut "Hànzì" (Karakter Han).</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Han Dynasty.' },
          en: { title: 'Han Dynasty', desc: 'The golden age that cemented Chinese identity.', content: '<p class="mb-4">Ruling for over 400 years (202 BC–220 AD), the Han Dynasty was so influential that today the majority ethnic group in China calls itself the "Han people," and their script "Hànzì" (Han characters).</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Han.' },
          ja: { title: '漢朝', desc: '中国のアイデンティティを確立した黄金時代。', content: '<p class="mb-4">400年以上（紀元前202年〜紀元220年）統治した漢朝は非常に影響力があり、今日の中国の多数派民族は自らを「漢民族」、文字を「漢字」と呼んでいます。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 漢。' },
          ko: { title: '한나라', desc: '중국의 정체성을 확립한 황금기.', content: '<p class="mb-4">400년 이상(기원전 202년~서기 220년) 통치한 한나라는 매우 큰 영향을 미쳐 오늘날 중국의 다수 민족은 스스로를 "한족", 문자를 "한자"라고 부릅니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 한나라.' },
          zh: { title: '汉朝', desc: '巩固了中国认同的黄金时代。', content: '<p class="mb-4">汉朝统治了400多年（公元前202年–公元220年），影响深远，以至于今天中国的大多数民族自称为"汉族"，他们的文字被称为"汉字"。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 汉朝。' }
        }
      },
      {
        id: 'tiongkok-jalur-sutra',
        langs: {
          id: { title: 'Jalur Sutra', desc: 'Jaringan rute perdagangan kuno yang menghubungkan Timur dan Barat.', content: '<p class="mb-4">Dibuka pertama kali pada masa Dinasti Han (130 SM), Jalur Sutra bukan hanya jalur pertukaran komoditas seperti sutra, rempah, dan kaca, tetapi juga jalur pertukaran agama (Buddha, Islam), budaya, dan penyebaran penyakit antar benua.</p>', sourceDomain: 'unesco.org', sourceSnippet: 'UNESCO — The Silk Roads.' },
          en: { title: 'The Silk Road', desc: 'Ancient trade network connecting the East and West.', content: '<p class="mb-4">Opened during the Han Dynasty (130 BC), the Silk Road facilitated the exchange of goods like silk and spices, as well as religions (Buddhism), culture, and technologies.</p>', sourceDomain: 'unesco.org', sourceSnippet: 'UNESCO — Silk Road.' },
          ja: { title: 'シルクロード', desc: '東西を結ぶ古代の貿易ルート網。', content: '<p class="mb-4">漢代（紀元前130年）に開かれ、絹や香辛料のほか、宗教（仏教）、文化、技術の交流を促進しました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — シルクロード。' },
          ko: { title: '실크로드', desc: '동서양을 연결하는 고대 무역로 네트워크.', content: '<p class="mb-4">한나라(기원전 130년) 때 열린 실크로드는 비단과 향신료뿐만 아니라 종교(불교), 문화, 기술의 교류를 촉진했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 실크로드.' },
          zh: { title: '丝绸之路', desc: '连接东西方的古代贸易网络。', content: '<p class="mb-4">在汉朝（公元前130年）开通的丝绸之路促进了丝绸、香料等商品的交流，以及宗教（佛教）、文化和技术的传播。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 丝绸之路。' }
        }
      },
      {
        id: 'tiongkok-tang',
        langs: {
          id: { title: 'Dinasti Tang (Zaman Keemasan)', desc: 'Era paling kosmopolit dan gemilang dalam sejarah peradaban.', content: '<p class="mb-4">Ibu kota Tang, Chang\'an, adalah kota terbesar di dunia yang dihuni oleh satu juta jiwa. Pada era ini, puisi, kesenian, dan penemuan teknologi seperti mesin cetak kayu pertama kali berkembang pesat.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Tang Dynasty.' },
          en: { title: 'Tang Dynasty (Golden Age)', desc: 'The most cosmopolitan and glorious era in Chinese history.', content: '<p class="mb-4">The capital, Chang\'an, was the world\'s largest city with a million residents. Poetry, art, and inventions like woodblock printing flourished remarkably.</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Tang.' },
          ja: { title: '唐朝 (黄金時代)', desc: '中国の歴史で最も国際的で輝かしい時代。', content: '<p class="mb-4">首都長安は人口100万人の世界最大の都市でした。詩、芸術、そして木版印刷のような発明が著しく栄えました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 唐。' },
          ko: { title: '당나라 (황금기)', desc: '중국 역사상 가장 국제적이고 찬란한 시대.', content: '<p class="mb-4">수도 장안은 인구 100만 명의 세계 최대 도시였습니다. 시, 예술, 그리고 목판 인쇄와 같은 발명품이 번성했습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 당나라.' },
          zh: { title: '唐朝 (黄金时代)', desc: '中国历史上最国际化和最辉煌的时代。', content: '<p class="mb-4">首都长安是世界上第一座人口过百万的城市。诗歌、艺术和雕版印刷等发明在这里蓬勃发展。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 唐朝。' }
        }
      },
      {
        id: 'tiongkok-terakota',
        langs: {
          id: { title: 'Pasukan Terakota Kaisar Qin', desc: 'Pasukan tanah liat ribuan prajurit pelindung kaisar pertama.', content: '<p class="mb-4">Ditemukan secara tidak sengaja oleh petani pada 1974, makam Kaisar Qin Shi Huang (kaisar pertama Tiongkok bersatu) berisi lebih dari 8.000 patung prajurit tanah liat seukuran manusia. Masing-masing memiliki wajah yang unik.</p>', sourceDomain: 'nationalgeographic.com', sourceSnippet: 'National Geographic — Terracotta Army.' },
          en: { title: 'Terracotta Army', desc: 'Clay army of thousands protecting the First Emperor.', content: '<p class="mb-4">Discovered in 1974, Qin Shi Huang\'s tomb holds over 8,000 life-sized clay soldiers, horses, and chariots, each with uniquely sculpted facial features.</p>', sourceDomain: 'ng.com', sourceSnippet: 'Nat Geo — Terracotta.' },
          ja: { title: '兵馬俑', desc: '初代皇帝を守る何千人もの粘土の軍隊。', content: '<p class="mb-4">1974年に発見された始皇帝の陵墓には、それぞれ独自の顔を持つ8,000体以上の等身大の粘土の兵士が収められています。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 兵馬俑。' },
          ko: { title: '병마용', desc: '초대 황제를 지키는 수천 명의 점토 군대.', content: '<p class="mb-4">1974년에 발견된 진시황릉에는 각각 고유한 얼굴을 가진 8,000개 이상의 실물 크기 점토 병사가 있습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 병마용.' },
          zh: { title: '兵马俑', desc: '保护始皇帝的数千泥土大军。', content: '<p class="mb-4">于1974年发现的秦始皇陵内含有8000多个真人大小的兵马俑，每个都有独特的面部特征。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 兵马俑。' }
        }
      },
      {
        id: 'tiongkok-tiga-negara',
        langs: {
          id: { title: 'Zaman Tiga Negara (Samkok)', desc: 'Era perpecahan militer legendaris paling terkenal di Tiongkok.', content: '<p class="mb-4">Runtuhnya Dinasti Han memecah Tiongkok menjadi tiga negara yang saling berperang: Wei, Shu, dan Wu (220–280 M). Zaman intrik politik dan taktik militer brilian ini (seperti oleh ahli strategi Zhuge Liang) kelak diabadikan dalam novel epik "Romance of the Three Kingdoms".</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Three Kingdoms Period.' },
          en: { title: 'Three Kingdoms Period', desc: 'China\'s most famous legendary era of military division.', content: '<p class="mb-4">The fall of the Han split China into three warring states: Wei, Shu, and Wu (220–280 AD). This era of brilliant tactics was immortalized in the epic novel "Romance of the Three Kingdoms".</p>', sourceDomain: 'history.com', sourceSnippet: 'History — Three Kingdoms.' },
          ja: { title: '三国時代', desc: '中国で最も有名な伝説的な軍事分裂の時代。', content: '<p class="mb-4">漢の滅亡により、中国は魏、蜀、呉の3つの国に分裂しました（220〜280年）。この時代は後に『三国志演義』として不朽の名作となりました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 三国時代 (中国)。' },
          ko: { title: '삼국 시대', desc: '중국에서 가장 유명한 전설적인 군사 분열의 시대.', content: '<p class="mb-4">한나라의 멸망으로 중국은 위, 촉, 오 세 나라로 분열되었습니다(220~280년). 이 시대는 나중에 서사 소설 "삼국지연의"로 영원히 기억되었습니다.</p>', sourceDomain: 'ko.wikipedia.org', sourceSnippet: 'Wikipedia — 삼국 시대 (중국).' },
          zh: { title: '三国时期', desc: '中国最著名的传奇军事分裂时代。', content: '<p class="mb-4">汉朝的覆灭使中国分裂为魏、蜀、吴三个交战国（220–280年）。这个充满辉煌战术的时代在史诗小说《三国演义》中名垂千古。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 三国时期。' }
        }
      },
      {
        id: 'tiongkok-xinhai',
        langs: {
          id: { title: 'Revolusi Xinhai (1911)', desc: 'Runtuhnya sistem kekaisaran berusia ribuan tahun dan lahirnya Republik.', content: '<p class="mb-4">Dipimpin secara spiritual oleh dr. Sun Yat-sen, revolusi ini menggulingkan kaisar terakhir Tiongkok, Puyi (Dinasti Qing), pada tahun 1911. Peristiwa ini mengakhiri lebih dari 2.000 tahun pemerintahan monarki imperial di Tiongkok.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Chinese Revolution 1911.' },
          en: { title: 'Xinhai Revolution (1911)', desc: 'The collapse of the millennia-old imperial system.', content: '<p class="mb-4">Led spiritually by Dr. Sun Yat-sen, this revolution overthrew the last emperor, Puyi (Qing Dynasty), ending over 2,000 years of imperial monarchic rule in China.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Xinhai Revolution.' },
          ja: { title: '辛亥革命 (1911)', desc: '数千年に及ぶ帝政の崩壊。', content: '<p class="mb-4">孫文が主導したこの革命は、最後の皇帝溥儀（清朝）を打倒し、中国における2000年以上の君主制の支配を終わらせました。</p>', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'Wikipedia — 辛亥革命。' },
          ko: { title: '신해혁명 (1911)', desc: '수천 년에 걸친 제국주의 체제의 붕괴.', content: '<p class="mb-4">쑨원이 주도한 이 혁명은 마지막 황제 푸이(청나라)를 타도하여 중국에서 2000년 이상 이어진 군주제 통치를 끝냈습니다.</p>', 고: 'Wikipedia — 신해혁명.' },
          zh: { title: '辛亥革命 (1911)', desc: '长达数千年的帝国制度的崩溃。', content: '<p class="mb-4">由孙中山领导的这场革命推翻了末代皇帝溥仪（清朝），结束了中国两千多年的君主专制统治。</p>', sourceDomain: 'zh.wikipedia.org', sourceSnippet: 'Wikipedia — 辛亥革命。' }
        }
      }
    ]
  },
  'india': {
    names: { id: 'India', en: 'India', ja: 'インド', ko: '인도', zh: '印度' },
    flag: '🇮🇳',
    articles: [
      {
        id: 'india-maurya',
        langs: {
          id: { title: 'Kekaisaran Maurya', desc: 'Kekaisaran pertama yang menyatukan hampir seluruh anak benua India, dipimpin Chandragupta Maurya pada 321 SM.', content: '<p class="mb-4">Kekaisaran Maurya (321-185 SM) didirikan oleh Chandragupta Maurya dengan bantuan penasihat Chanakya. Kaisar Ashoka (268-232 SM) memeluk Buddhisme setelah Pertempuran Kalinga yang menewaskan 100.000 orang. Ia menyebarkan ajaran Buddha ke seluruh Asia. Singa pada pilar Ashoka kini menjadi lambang negara India modern.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Maurya Empire.' },
          en: { title: 'Maurya Empire', desc: 'The first empire to unify most of the Indian subcontinent, founded by Chandragupta Maurya in 321 BCE.', content: '<p class="mb-4">The Maurya Empire (321-185 BCE) was founded by Chandragupta Maurya with advisor Chanakya, stretching from Afghanistan to Bengal. Emperor Ashoka (268-232 BCE) converted to Buddhism after the bloody Battle of Kalinga and spread it across Asia through diplomatic missions. The Ashoka lion capital is now India's national emblem.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Maurya Empire.' },
          ja: { title: 'マウリヤ朝', desc: '紀元前321年創設のインド亜大陸をほぼ統一した最初の帝国。', content: '<p class="mb-4">マウリヤ朝（紀元前321-185年）はチャンドラグプタ・マウリヤが創設。アショーカ王（紀元前268-232年）がカリンガの戦い後に仏教へ改宗しアジア全土に仏教を広めました。アショーカの獅子柱頭は現在のインドの国章です。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Maurya Empire.' },
          ko: { title: '마우리아 제국', desc: '기원전 321년 찬드라굽타 마우리아가 창건한 인도 아대륙을 거의 통일한 최초의 제국.', content: '<p class="mb-4">마우리아 제국(기원전 321-185년)은 찬드라굽타 마우리아가 창건했습니다. 아소카 왕(기원전 268-232년)이 칼링가 전투 후 불교로 개종하고 아시아 전역에 불교를 전파했습니다. 아소카의 사자 주두는 현재 인도의 국장입니다.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Maurya Empire.' },
          zh: { title: '孔雀帝国', desc: '公元前321年创建的统一印度次大陆的第一个帝国。', content: '<p class="mb-4">孔雀帝国（公元前321-185年）由旃陀罗笈多·孔雀创建。阿育王（公元前268-232年）在卡林伽战役后皈依佛教，向全亚洲传播佛教。阿育王的狮子柱头成为现代印度的国徽。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Maurya Empire.' }
        }
      },
      {
        id: 'india-taj-mahal',
        langs: {
          id: { title: 'Taj Mahal — Monumen Cinta Agung', desc: 'Mahakarya arsitektur Mughal yang dibangun Shah Jahan untuk mengenang istrinya Mumtaz Mahal, kini Keajaiban Dunia.', content: '<p class="mb-4">Taj Mahal dibangun 1632-1653 oleh Kaisar Mughal Shah Jahan sebagai makam istrinya Mumtaz Mahal yang meninggal saat melahirkan. Lebih dari 20.000 pekerja menghabiskan 21 tahun membangunnya dari marmer putih murni. UNESCO World Heritage 1983 dan Keajaiban Dunia Baru 2007. Dikunjungi 7-8 juta wisatawan per tahun.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Taj Mahal.' },
          en: { title: 'Taj Mahal — Monument of Supreme Love', desc: 'The Mughal masterpiece built by Shah Jahan for his wife Mumtaz Mahal, now a Wonder of the World.', content: '<p class="mb-4">The Taj Mahal was built 1632-1653 by Emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal, who died in childbirth. Over 20,000 workers labored 21 years using pure white marble inlaid with semi-precious stones worldwide. UNESCO World Heritage since 1983 and New Seven Wonders of the World since 2007. Visited by 7-8 million tourists annually.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Taj Mahal.' },
          ja: { title: 'タージ・マハル', desc: 'シャー・ジャハーンが妻のために建てたムガル建築の傑作。世界七不思議の一つ。', content: '<p class="mb-4">タージ・マハルは1632-1653年に皇帝シャー・ジャハーンが出産で亡くなった愛妻ムムターズ・マハルの廟として建設。2万人以上の職人が21年かけ純白の大理石で完成させました。1983年ユネスコ世界遺産、2007年世界七不思議に選定。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Taj Mahal.' },
          ko: { title: '타지마할', desc: '샤 자한이 아내를 위해 건설한 무굴 건축의 걸작. 세계 7대 불가사의 중 하나.', content: '<p class="mb-4">타지마할은 1632-1653년 황제 샤 자한이 출산 중 사망한 사랑하는 아내 뭄타즈 마할의 영묘로 건설했습니다. 2만여 명의 장인이 21년에 걸쳐 순백의 대리석으로 완성했습니다. 1983년 유네스코 세계문화유산, 2007년 세계 7대 불가사의로 선정되었습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Taj Mahal.' },
          zh: { title: '泰姬陵', desc: '沙贾汗为妻子建造的莫卧儿建筑杰作，世界七大奇迹之一。', content: '<p class="mb-4">泰姬陵建于1632-1653年，是沙贾汗为生育中去世的爱妻穆姆塔兹·马哈尔所建的陵墓。超过2万名工匠耗时21年用纯白大理石完成。1983年列为联合国教科文组织世界遗产，2007年入选世界新七大奇迹。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Taj Mahal.' }
        }
      },
      {
        id: 'india-gandhi',
        langs: {
          id: { title: 'Mahatma Gandhi dan Kemerdekaan India', desc: 'Gandhi memimpin perlawanan tanpa kekerasan yang mengakhiri 200 tahun penjajahan Inggris di India.', content: '<p class="mb-4">Mahatma Gandhi (1869-1948) mengembangkan Satyagraha — perlawanan tanpa kekerasan. Maret Garam 1930 (berjalan 388 km ke pantai) menjadi aksi paling ikonik melawan pajak garam kolonial Inggris. India merdeka 15 Agustus 1947. Gandhi dibunuh 30 Januari 1948. Metodenya menginspirasi Martin Luther King Jr. dan Nelson Mandela.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Mahatma Gandhi.' },
          en: { title: 'Mahatma Gandhi and Indian Independence', desc: 'Gandhi led nonviolent resistance that ended 200 years of British colonial rule in India.', content: '<p class="mb-4">Mahatma Gandhi (1869-1948) developed Satyagraha — nonviolent resistance. The 1930 Salt March (388 km walk to the sea) was his most iconic act against British colonial salt tax, triggering mass civil disobedience. India gained independence on August 15, 1947. Gandhi was assassinated on January 30, 1948. His methods inspired Martin Luther King Jr. and Nelson Mandela.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Gandhi.' },
          ja: { title: 'マハトマ・ガンジーとインド独立', desc: 'ガンジーが非暴力抵抗でインドの200年の植民地支配を終わらせた。', content: '<p class="mb-4">マハトマ・ガンジー（1869-1948）はサティヤーグラハ（非暴力抵抗）を開発。1930年の塩の行進（388km徒歩）で世界的注目を集めました。インドは1947年8月15日に独立。ガンジーは1948年1月30日に暗殺。キング牧師やマンデラに影響を与えました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Gandhi.' },
          ko: { title: '마하트마 간디와 인도 독립', desc: '간디가 비폭력 저항으로 200년의 영국 식민지 지배를 종식시켰다.', content: '<p class="mb-4">마하트마 간디(1869-1948)는 사티아그라하(비폭력 저항)를 개발했습니다. 1930년 소금 행진(388km 도보)이 세계적 주목을 받았습니다. 인도는 1947년 8월 15일 독립했습니다. 간디는 1948년 1월 30일 암살되었으며 마틴 루서 킹과 만델라에게 영향을 주었습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Gandhi.' },
          zh: { title: '圣雄甘地与印度独立', desc: '甘地通过非暴力抵抗结束了200年英国殖民统治。', content: '<p class="mb-4">圣雄甘地（1869-1948年）发展了"坚持真理"非暴力抵抗方法。1930年食盐长征（步行388公里）引发全球关注。印度于1947年8月15日独立。甘地于1948年1月30日遇刺。他的方法影响了马丁·路德·金和曼德拉。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Gandhi.' }
        }
      }
    ]
  },
  'yunani': {
    names: { id: 'Yunani Kuno', en: 'Ancient Greece', ja: '古代ギリシャ', ko: '고대 그리스', zh: '古希腊' },
    flag: '🇬🇷',
    articles: [
      {
        id: 'yunani-alexander',
        langs: {
          id: { title: 'Alexander Agung — Penakluk Dunia', desc: 'Pemimpin militer terbesar sepanjang masa yang membangun kekaisaran terbesar sebelum usia 33 tahun.', content: '<p class="mb-4">Alexander III dari Makedonia (356-323 SM) tidak pernah kalah dalam pertempuran sepanjang 15 tahun karir militernya. Murid Aristoteles ini naik takhta usia 20 tahun dan menaklukkan Persia, Mesir, Asia Tengah hingga India. Ia mendirikan 20+ kota Alexandria menyebarkan budaya Yunani (Helenisme). Alexander meninggal misterius di Babilonia usia 32 tahun.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Alexander the Great.' },
          en: { title: 'Alexander the Great — Conqueror of the World', desc: 'The greatest military leader of all time who built the largest empire before age 33.', content: '<p class="mb-4">Alexander III of Macedon (356-323 BCE) was never defeated in 15 years of military campaigns. A student of Aristotle, he conquered Persia, Egypt, Central Asia, and northwestern India, founding 20+ cities named Alexandria that spread Greek culture (Hellenism). He died mysteriously in Babylon at age 32.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Alexander the Great.' },
          ja: { title: 'アレクサンドロス大王', desc: '33歳以前に史上最大の帝国を築いた史上最大の軍事指導者。', content: '<p class="mb-4">マケドニアのアレクサンドロス3世（紀元前356-323年）は15年間無敗。アリストテレスの弟子として20歳で即位しペルシャ・エジプト・中央アジア・インド北西部を征服。20以上のアレクサンドリアを建設。32歳でバビロンにて謎の死を遂げました。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Alexander.' },
          ko: { title: '알렉산더 대왕', desc: '33세 이전에 역사상 최대 제국을 건설한 역사상 최고의 군사 지도자.', content: '<p class="mb-4">마케도니아의 알렉산더 3세(기원전 356-323년)는 15년간 무패. 아리스토텔레스의 제자로 20세에 즉위하여 페르시아, 이집트, 중앙아시아, 인도 북서부를 정복했습니다. 20개 이상의 알렉산드리아를 건설했으며 32세에 바빌론에서 의문사했습니다.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Alexander.' },
          zh: { title: '亚历山大大帝', desc: '在33岁之前建立历史上最大帝国的最伟大军事领袖。', content: '<p class="mb-4">马其顿的亚历山大三世（公元前356-323年）15年军事生涯从未战败。师从亚里士多德，20岁登基，征服波斯、埃及、中亚和印度西北部，建立了20多座亚历山大城。32岁在巴比伦神秘去世。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Alexander.' }
        }
      },
      {
        id: 'yunani-olimpiade',
        langs: {
          id: { title: 'Olimpiade Kuno Yunani', desc: 'Festival olahraga terbesar dunia kuno yang digelar setiap 4 tahun di Olympia sejak 776 SM selama 1.200 tahun.', content: '<p class="mb-4">Olimpiade Kuno diadakan di Olympia setiap 4 tahun sejak 776 SM, didedikasikan untuk Zeus. Selama berlangsung, semua perang dihentikan (Ekecheiria). Cabang olahraga: lari, gulat, tinju, pacuan kuda, pentathlon. Pemenang mendapat karangan daun zaitun. Dilarang Kaisar Theodosius I tahun 393 M. Olimpiade modern dihidupkan Baron Pierre de Coubertin di Athena 1896.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Ancient Olympics.' },
          en: { title: 'Ancient Greek Olympics', desc: 'The greatest sporting festival of the ancient world held every 4 years at Olympia from 776 BCE for 1,200 years.', content: '<p class="mb-4">The Ancient Olympics were held at Olympia every 4 years from 776 BCE, dedicated to Zeus. All wars were suspended during the games (Ekecheiria). Sports included sprint, wrestling, boxing, chariot racing, and pentathlon. Winners received olive leaf crowns. Banned by Emperor Theodosius I in 393 CE. Modern Olympics revived by Baron Pierre de Coubertin in Athens in 1896.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Ancient Olympics.' },
          ja: { title: '古代ギリシャのオリンピック', desc: '紀元前776年から1,200年間4年ごとにオリンピアで開催された古代世界最大のスポーツ祭典。', content: '<p class="mb-4">古代オリンピックは紀元前776年からゼウスに捧ける祭典として4年ごとにオリンピアで開催。期間中は全戦争が停止（エケケイリア）。競技は短距離走・レスリング・ボクシング・戦車競争・五種競技。393年テオドシウス1世に禁止。1896年アテネで近代オリンピックとして復活。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Ancient Olympics.' },
          ko: { title: '고대 그리스 올림픽', desc: '기원전 776년부터 1,200년간 4년마다 올림피아에서 개최된 고대 세계 최대 스포츠 축제.', content: '<p class="mb-4">고대 올림픽은 기원전 776년부터 제우스를 위한 축제로 4년마다 올림피아에서 개최되었습니다. 기간 중 모든 전쟁 중단(에케케이리아). 단거리 달리기, 레슬링, 복싱, 전차 경주, 5종 경기가 있었습니다. 393년 테오도시우스 1세에 의해 금지되었으며 1896년 아테네에서 근대 올림픽으로 부활했습니다.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Ancient Olympics.' },
          zh: { title: '古代希腊奥林匹克运动会', desc: '公元前776年起每4年在奥林匹亚举办的古代世界最大体育盛会，持续1,200年。', content: '<p class="mb-4">古代奥运会自公元前776年起以4年为周期在奥林匹亚举办，献给宙斯神。期间所有战争停止（神圣休战）。项目包括短跑、摔跤、拳击、战车赛、五项全能。优胜者获颁橄榄叶冠。393年被狄奥多西一世禁止。1896年在雅典以现代奥运会形式复活。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Ancient Olympics.' }
        }
      },
      {
        id: 'yunani-sparta',
        langs: {
          id: { title: 'Sparta — Kota Prajurit Terkuat', desc: 'Polis Yunani kuno yang membangun militer paling ditakuti dunia kuno melalui sistem Agoge yang keras.', content: '<p class="mb-4">Sparta membangun masyarakat seluruhnya berpusat pada kekuatan militer. Setiap anak laki-laki menjalani Agoge — pelatihan militer ketat dari usia 7 tahun. Wanita Sparta punya hak lebih luas dari wanita Yunani lainnya. Pertempuran Thermopylae (480 SM): 300 prajurit Sparta Raja Leonidas menahan ratusan ribu tentara Persia selama 3 hari — simbol keberanian abadi.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Sparta.' },
          en: { title: 'Sparta — City of the Mightiest Warriors', desc: 'The ancient Greek polis that built the most feared military through the brutal Agoge training system.', content: '<p class="mb-4">Sparta built a society entirely centered on military strength. Every boy underwent the Agoge — strict military training from age 7. Spartan women had far more rights than other Greek women. The Battle of Thermopylae (480 BCE): 300 Spartans under King Leonidas held off hundreds of thousands of Persian troops for 3 days — an eternal symbol of courage and sacrifice.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Sparta.' },
          ja: { title: 'スパルタ — 最強の戦士の都市', desc: 'アゴーゲーで古代世界最強の軍を築いた古代ギリシャのポリス。', content: '<p class="mb-4">スパルタは軍事力を中心に社会が構成されたポリスです。7歳からのアゴーゲー訓練が全少年に課されました。スパルタの女性は他のギリシャ女性より権利が豊かでした。テルモピュライの戦い（紀元前480年）：レオニダス王率いる300人が3日間ペルシャ軍数十万を食い止めた伝説は永遠の勇気の象徴です。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Sparta.' },
          ko: { title: '스파르타 — 가장 강한 전사의 도시', desc: '아고게 훈련 제도로 고대 세계 최강의 군대를 구축한 고대 그리스 폴리스.', content: '<p class="mb-4">스파르타는 군사력 중심으로 사회가 구성된 폴리스입니다. 7세부터 아고게 훈련이 모든 소년에게 부과되었습니다. 스파르타 여성은 다른 그리스 여성보다 권리가 많았습니다. 테르모필레 전투(기원전 480년): 레오니다스 왕의 300명이 3일간 수십만 페르시아군을 저지한 전설은 영원한 용기의 상징입니다.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Sparta.' },
          zh: { title: '斯巴达 — 最强战士之城', desc: '通过阿哥吉训练制度建立古代世界最强军队的古希腊城邦。', content: '<p class="mb-4">斯巴达以军事实力为中心组织社会。所有男孩从7岁开始接受阿哥吉军事训练。斯巴达女性拥有比其他希腊女性更多的权利。温泉关战役（公元前480年）：莱奥尼达斯王率300名战士阻挡波斯数十万大军3天——成为永恒的勇气象征。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Sparta.' }
        }
      },
      {
        id: 'yunani-demokrasi',
        langs: {
          id: { title: 'Lahirnya Demokrasi di Athena', desc: 'Bagaimana Athena kuno menciptakan demokrasi pada abad ke-5 SM — sistem pemerintahan yang kini menjadi fondasi dunia modern.', content: '<p class="mb-4">Demokrasi (demos=rakyat, kratos=kekuasaan) lahir di Athena pada abad ke-5 SM di bawah reformasi Cleisthenes (508 SM) dan Pericles. Setiap warga laki-laki Athena memiliki hak suara dalam majelis (Ekklesia) yang membuat keputusan hukum dan kebijakan negara.</p><p class="mb-4">Athena juga melahirkan filsafat Barat melalui Socrates, Plato, dan Aristoteles — tiga tokoh yang pemikirannya masih mendominasi ilmu pengetahuan, etika, dan politik hingga hari ini.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Athenian democracy.' },
          en: { title: 'Birth of Democracy in Athens', desc: 'How ancient Athens created democracy in the 5th century BCE — the governing system that now forms the foundation of the modern world.', content: '<p class="mb-4">Democracy (demos=people, kratos=power) was born in Athens in the 5th century BCE under reforms by Cleisthenes (508 BCE) and Pericles. Every male Athenian citizen had a vote in the assembly (Ekklesia) that made laws and state decisions. Athens also birthed Western philosophy through Socrates, Plato, and Aristotle — three thinkers whose ideas still dominate science, ethics, and politics today.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Athenian democracy.' },
          ja: { title: 'アテネにおける民主主義の誕生', desc: '紀元前5世紀の古代アテネが民主主義を創出した経緯。現代世界の基盤となる統治制度。', content: '<p class="mb-4">民主主義（デモス＝人民、クラトス＝権力）は紀元前5世紀のアテネでクレイステネス（紀元前508年）とペリクレスの改革により誕生しました。成人男性市民全員が法律・政策を決定する民会（エクレシア）で投票権を持ちました。アテネはソクラテス・プラトン・アリストテレスを通じて西洋哲学も生み出しました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Athenian democracy.' },
          ko: { title: '아테네에서의 민주주의 탄생', desc: '기원전 5세기 고대 아테네가 민주주의를 창출한 과정. 현대 세계의 기반이 된 통치 제도.', content: '<p class="mb-4">민주주의(데모스=인민, 크라토스=권력)는 기원전 5세기 아테네에서 클레이스테네스(기원전 508년)와 페리클레스의 개혁으로 탄생했습니다. 성인 남성 시민 모두가 법률과 정책을 결정하는 민회(에클레시아)에서 투표권을 가졌습니다. 아테네는 소크라테스, 플라톤, 아리스토텔레스를 통해 서양 철학도 탄생시켰습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Athenian democracy.' },
          zh: { title: '雅典民主的诞生', desc: '古代雅典如何在公元前5世纪创造民主——如今构成现代世界基础的治理制度。', content: '<p class="mb-4">民主（demos=人民，kratos=权力）在公元前5世纪的雅典，在克里斯提尼（公元前508年）和伯里克利的改革下诞生。每位成年男性公民在决定法律和国家政策的公民大会（民众大会）中都有投票权。雅典还通过苏格拉底、柏拉图和亚里士多德孕育了西方哲学。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Athenian democracy.' }
        }
      }
    ]
  },
  'mongolia': {
    names: { id: 'Mongolia', en: 'Mongolia', ja: 'モンゴル', ko: '몽골', zh: '蒙古' },
    flag: '🇲🇳',
    articles: [
      {
        id: 'mongolia-genghis',
        langs: {
          id: { title: 'Genghis Khan — Pembangun Kekaisaran Terbesar', desc: 'Temujin yang menyatukan suku-suku Mongolia dan membangun kekaisaran daratan terbesar dalam sejarah manusia.', content: '<p class="mb-4">Temujin (1162-1227) bangkit dari masa kecil penuh penderitaan menjadi Genghis Khan pada 1206. Dalam 20 tahun pasukannya menaklukkan dari Tiongkok hingga Eropa Timur — 24 juta km² dan 100 juta penduduk. Taktik: kavaleri cepat, intelijen superior, psikologi terror. Diperkirakan 40 juta tewas dalam penaklukannya. Meninggal 1227 secara misterius, lokasi kuburannya tetap rahasia.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Genghis Khan.' },
          en: { title: 'Genghis Khan — Builder of the Greatest Empire', desc: 'Temujin who united Mongolian tribes and built the largest contiguous land empire in human history.', content: '<p class="mb-4">Temujin (1162-1227) rose from a painful childhood to become Genghis Khan in 1206. In 20 years his forces conquered from China to Eastern Europe — 24 million km² and 100 million people. Tactics: fast cavalry, superior intelligence, psychological terror. An estimated 40 million died in his conquests. He died mysteriously in 1227, his grave location still unknown to this day.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Genghis Khan.' },
          ja: { title: 'チンギス・ハン — 最大帝国の建設者', desc: 'モンゴルの部族を統一し、人類史上最大の陸上帝国を築いたテムジン。', content: '<p class="mb-4">テムジン（1162-1227年）は苦しい幼少期を乗り越え1206年にチンギス・ハンとなりました。20年で中国から東ヨーロッパまで2,400万平方キロ・1億人を支配。高速騎兵・優秀な情報収集・心理的恐怖を武器に推定4,000万人が犠牲になりました。1227年に謎の死を遂げ、墓の場所は今も秘密です。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Genghis Khan.' },
          ko: { title: '칭기즈 칸 — 가장 큰 제국의 건설자', desc: '몽골 부족을 통일하고 인류 역사상 가장 큰 연속 육상 제국을 건설한 테무진.', content: '<p class="mb-4">테무진(1162-1227년)은 힘든 어린 시절을 극복하고 1206년 칭기즈 칸이 되었습니다. 20년 만에 중국에서 동유럽까지 2,400만 km²와 1억 명을 지배했습니다. 고속 기병, 우수한 정보력, 심리적 공포를 무기로 추정 4,000만 명이 희생되었습니다. 1227년 의문사하여 무덤 위치는 아직도 비밀입니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Genghis Khan.' },
          zh: { title: '成吉思汗 — 最大帝国的建造者', desc: '统一蒙古各部落、建立人类历史上最大连续陆地帝国的铁木真。', content: '<p class="mb-4">铁木真（1162-1227年）克服艰难童年，1206年成为成吉思汗。20年内从中国到东欧征服2,400万平方公里和1亿人口。以快速骑兵、出色情报和心理恐惧为武器，估计造成4,000万人死亡。1227年神秘去世，墓穴位置至今仍是秘密。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Genghis Khan.' }
        }
      }
    ]
  },
  'ottoman': {
    names: { id: 'Kesultanan Ottoman', en: 'Ottoman Empire', ja: 'オスマン帝国', ko: '오스만 제국', zh: '奥斯曼帝国' },
    flag: '🕌',
    articles: [
      {
        id: 'ottoman-suleiman',
        langs: {
          id: { title: 'Sultan Suleiman Agung', desc: 'Pemerintahan Sultan Suleiman I (1520-1566) yang membawa Kekaisaran Ottoman ke puncak kekuasaan dan peradaban.', content: '<p class="mb-4">Suleiman I (1494-1566), dijuluki Al-Qanuni (Pembuat Hukum) dan Suleiman Agung, memerintah 46 tahun. Ottoman membentang dari Hungaria hingga Persia, Krimea hingga Somalia. Ia reformator hukum besar, penyair, dan patron seni. Arsitek Mimar Sinan membangun Masjid Suleiman di Istanbul atas perintahnya. Meninggal saat pengepungan Szigetvár 1566.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Suleiman the Magnificent.' },
          en: { title: 'Sultan Suleiman the Magnificent', desc: 'The reign of Sultan Suleiman I (1520-1566) that brought the Ottoman Empire to the peak of power and civilization.', content: '<p class="mb-4">Suleiman I (1494-1566), called Al-Qanuni (The Lawgiver) and Suleiman the Magnificent, ruled 46 years. The Ottoman Empire stretched from Hungary to Persia, Crimea to Somalia. He was a major legal reformer, poet, and art patron. Architect Mimar Sinan built the Suleiman Mosque in Istanbul under his command. He died during the Siege of Szigetvár in 1566.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Suleiman the Magnificent.' },
          ja: { title: 'スレイマン大帝', desc: 'オスマン帝国を権力・文明の頂点に導いたスレイマン1世の治世（1520-1566年）。', content: '<p class="mb-4">スレイマン1世（1494-1566年）は「立法者」・「壮麗帝」と呼ばれ46年間統治。帝国はハンガリーからペルシャ、クリミアからソマリアまで広がりました。法改革者・詩人・芸術のパトロンでもあり、建築家ミマール・スィナンがスレイマニエ・モスクを建設。1566年ジゲトバール包囲中に死去しました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Suleiman.' },
          ko: { title: '술레이만 대제', desc: '오스만 제국을 권력과 문명의 정점으로 이끈 술레이만 1세의 치세(1520-1566년).', content: '<p class="mb-4">술레이만 1세(1494-1566년)는 "입법자"·"장엄한 술레이만"으로 불리며 46년 통치했습니다. 제국은 헝가리에서 페르시아, 크림에서 소말리아까지 뻗어 있었습니다. 법 개혁자, 시인, 예술 후원자이기도 했으며 건축가 미마르 시난이 술레이마니예 모스크를 건설했습니다. 1566년 시게트바르 포위전 중 사망했습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Suleiman.' },
          zh: { title: '苏莱曼大帝', desc: '将奥斯曼帝国带至权力与文明顶峰的苏莱曼一世统治时期（1520-1566年）。', content: '<p class="mb-4">苏莱曼一世（1494-1566年）被称为"立法者"和"大帝"，统治46年。帝国从匈牙利延伸至波斯，从克里米亚到索马里。他是重要的法律改革者、诗人和艺术赞助人，建筑师米马尔·锡南奉命建造苏莱曼尼耶清真寺。1566年在锡格特堡围攻战中去世。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Suleiman.' }
        }
      },
      {
        id: 'ottoman-konstantinopel',
        langs: {
          id: { title: 'Jatuhnya Konstantinopel 1453', desc: 'Penaklukan Konstantinopel oleh Sultan Mehmed II yang mengakhiri Kekaisaran Romawi Timur dan mengubah sejarah dunia.', content: '<p class="mb-4">Pada 29 Mei 1453, Sultan Mehmed II (22 tahun) menembus tembok Konstantinopel setelah 53 hari pengepungan menggunakan meriam raksasa Basilica. Kekaisaran Romawi Timur (Byzantium) yang 1.100 tahun berakhir. Dampak global: sarjana Yunani melarikan diri ke Eropa memicu Renaisans; jalur darat ke Asia terputus mendorong Eropa cari jalur laut — Columbus menemukan Amerika 1492.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Fall of Constantinople.' },
          en: { title: 'Fall of Constantinople 1453', desc: 'Ottoman conquest of Constantinople ended the Eastern Roman Empire and changed world history forever.', content: '<p class="mb-4">On May 29, 1453, Sultan Mehmed II (age 22) breached Constantinople after 53 days using the massive Basilica cannon. The 1,100-year Eastern Roman Empire (Byzantium) ended. Global impact: Greek scholars fled to Europe with manuscripts, triggering the Renaissance; the blocking of land routes to Asia pushed Europe to find sea routes — Columbus discovered America in 1492.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Fall of Constantinople.' },
          ja: { title: 'コンスタンティノープルの陥落 1453年', desc: 'メフメト2世のコンスタンティノープル征服が東ローマ帝国を終わらせ世界史を変えた。', content: '<p class="mb-4">1453年5月29日、22歳のメフメト2世が巨大砲バジリカで53日間の包囲の末コンスタンティノープルを陥落。1,100年続いた東ローマ帝国が終焉しました。世界への影響：ギリシャ学者が古典を持ちヨーロッパに逃れルネサンスを促進；陸路遮断がヨーロッパに海路を求めさせ1492年コロンブスのアメリカ発見につながりました。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Constantinople.' },
          ko: { title: '콘스탄티노폴리스의 함락 1453년', desc: '메흐메트 2세의 콘스탄티노폴리스 정복이 동로마 제국을 종식시키고 세계사를 영원히 바꾸었다.', content: '<p class="mb-4">1453년 5월 29일 22세의 메흐메트 2세가 거대 대포 바실리카로 53일 만에 콘스탄티노폴리스를 함락했습니다. 1,100년 동로마 제국이 종막을 고했습니다. 세계적 영향: 그리스 학자들이 고전 필사본을 들고 유럽으로 도피해 르네상스를 촉진; 육로 차단이 유럽을 해로 개척으로 이끌어 1492년 콜럼버스의 아메리카 발견으로 이어졌습니다.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Constantinople.' },
          zh: { title: '君士坦丁堡的陷落 1453年', desc: '穆罕默德二世征服君士坦丁堡，终结东罗马帝国并永久改变世界历史。', content: '<p class="mb-4">1453年5月29日，22岁的穆罕默德二世用巨炮巴西利卡经53天围攻攻克君士坦丁堡。延续1,100年的东罗马帝国终结。世界影响：希腊学者携古籍手稿逃往欧洲，促进了文艺复兴；陆路贸易受阻迫使欧洲开辟海路，导致1492年哥伦布发现美洲大陆。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Constantinople.' }
        }
      }
    ]
  },
  'maya': {
    names: { id: 'Peradaban Maya', en: 'Maya Civilization', ja: 'マヤ文明', ko: '마야 문명', zh: '玛雅文明' },
    flag: '🏛️',
    articles: [
      {
        id: 'maya-peradaban',
        langs: {
          id: { title: 'Peradaban Maya — Ilmuwan Mesoamerika', desc: 'Maya mengembangkan sistem tulisan, kalender, astronomi, dan matematika paling maju di dunia kuno Amerika.', content: '<p class="mb-4">Peradaban Maya berkembang di Mesoamerika dari sekitar 2000 SM hingga kedatangan Spanyol abad ke-16. Populasi puncak 10-20 juta jiwa. Maya mengembangkan tulisan hiroglif paling kompleks di Amerika, kalender lebih akurat dari Eropa saat itu, dan sistem angka berbasis-20 dengan konsep nol. Kota besar: Tikal, Chichen Itza, Palenque. Runtuh sekitar 900 M akibat kekeringan dan perang.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Maya civilization.' },
          en: { title: 'Maya Civilization — Mesoamerica's Scientists', desc: 'The Maya developed the most advanced writing, calendar, astronomy, and mathematics in ancient America.', content: '<p class="mb-4">Maya civilization flourished in Mesoamerica from around 2000 BCE until the 16th-century Spanish arrival. Peak population: 10-20 million. They developed the most complex writing in the Americas, a more accurate calendar than contemporary Europe, and a base-20 number system with zero. Great cities included Tikal, Chichen Itza, and Palenque. Classic Maya collapsed around 900 CE due to drought and warfare.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Maya civilization.' },
          ja: { title: 'マヤ文明 — 中米の科学者', desc: 'マヤは古代アメリカで最も進んだ文字・暦・天文・数学を発展させた。', content: '<p class="mb-4">マヤ文明は紀元前2000年頃から16世紀まで中米で栄えました。最盛期人口1,000-2,000万人。アメリカ最複雑な文字、当時のヨーロッパより正確な暦、ゼロを含む20進法を開発。ティカル・チチェン・イツァ・パレンケなどの大都市が繁栄。古典マヤは900年頃に干ばつと戦争で崩壊しました。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Maya civilization.' },
          ko: { title: '마야 문명 — 메소아메리카의 과학자들', desc: '마야는 고대 아메리카에서 가장 발전된 문자, 달력, 천문학, 수학을 발전시켰다.', content: '<p class="mb-4">마야 문명은 기원전 2000년경부터 16세기 스페인 도래까지 중미에서 번성했습니다. 최성기 인구 1,000-2,000만 명. 아메리카에서 가장 복잡한 문자, 당시 유럽보다 정확한 달력, 영을 포함한 20진법을 개발했습니다. 티칼, 치첸이트사, 팔렌케 등 대도시가 번성했습니다. 고전 마야는 900년경 가뭄과 전쟁으로 붕괴했습니다.</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Maya civilization.' },
          zh: { title: '玛雅文明 — 中美洲的科学家', desc: '玛雅人发展出古代美洲最先进的文字、历法、天文学和数学。', content: '<p class="mb-4">玛雅文明从约公元前2000年繁荣至16世纪西班牙人到来。鼎盛时期人口1,000-2,000万。他们开发了美洲最复杂的文字体系、比当时欧洲更精确的历法，以及包含零的20进制数字系统。蒂卡尔、奇琴伊察、帕伦克等大城市兴旺。古典玛雅约于900年因干旱和战争崩溃。</p>', sourceDomain: 'britannica.com', sourceSnippet: 'Britannica — Maya civilization.' }
        }
      }
    ]
  },
  'viking': {
    names: { id: 'Viking', en: 'Vikings', ja: 'ヴァイキング', ko: '바이킹', zh: '维京人' },
    flag: '⚔️',
    articles: [
      {
        id: 'viking-ekspedisi',
        langs: {
          id: { title: 'Viking — Penjelajah Lautan Dunia', desc: 'Bangsa Norse dari Skandinavia yang menjelajahi dari Amerika Utara hingga Asia Tengah antara 793-1066 M.', content: '<p class="mb-4">Viking dari Skandinavia aktif 793-1066 M berkat kapal Longship revolusioner. Leif Erikson sekitar 1000 M mendarat di Amerika Utara (Vinland) — 400 tahun sebelum Columbus. Mereka juga mendirikan koloni di Islandia (874 M) dan Greenland (985 M), berdagang hingga Byzantium dan Baghdad, serta mendirikan Kerajaan Kiev di Eropa Timur. Ekspansi berakhir seiring kristenisasi Skandinavia.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Vikings.' },
          en: { title: 'Vikings — World Ocean Explorers', desc: 'Norse people from Scandinavia who explored from North America to Central Asia between 793-1066 CE.', content: '<p class="mb-4">Vikings from Scandinavia were active 793-1066 CE, famous for revolutionary Longships. Leif Erikson around 1000 CE landed in North America (Vinland) — over 400 years before Columbus. They also settled Iceland (874 CE) and Greenland (985 CE), traded as far as Byzantium and Baghdad, and founded Kievan Rus in Eastern Europe. Viking expansion ended as Scandinavia Christianized.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Vikings.' },
          ja: { title: 'ヴァイキング — 世界の海の探検家', desc: '793-1066年にスカンジナビアから北米から中央アジアまで探検したノルセ人。', content: '<p class="mb-4">スカンジナビアのヴァイキングは793-1066年に革命的なロングシップで活動。レイフ・エリクソンは1000年頃北米（ヴィンランド）に上陸し、コロンブスより400年以上先んじました。アイスランド（874年）・グリーンランド（985年）に植民し、ビザンツ・バグダードまで交易し、東欧にキエフ・ルーシを建国。スカンジナビアのキリスト教化とともに拡張は終焉しました。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Vikings.' },
          ko: { title: '바이킹 — 세계 바다의 탐험가', desc: '793-1066년 스칸디나비아에서 북아메리카부터 중앙아시아까지 탐험한 노르스인.', content: '<p class="mb-4">스칸디나비아 바이킹은 793-1066년 혁명적인 롱십으로 활동했습니다. 레이프 에릭손은 약 1000년경 북아메리카(빈란드)에 상륙했는데 콜럼버스보다 400년 이상 앞섰습니다. 아이슬란드(874년)·그린란드(985년)에 식민지를 건설하고 비잔티움·바그다드까지 교역하며 동유럽에 키예프 루스를 건국했습니다. 스칸디나비아의 기독교화와 함께 확장이 끝났습니다.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Vikings.' },
          zh: { title: '维京人 — 世界海洋探险家', desc: '793-1066年从斯堪的纳维亚探险于北美至中亚的诺斯人。', content: '<p class="mb-4">斯堪的纳维亚维京人活跃于793-1066年，以革命性的长船著称。莱夫·埃里克森约于1000年登陆北美（文兰）——比哥伦布早400多年。他们在冰岛（874年）和格陵兰（985年）建立殖民地，交易远达拜占庭和巴格达，并在东欧建立了基辅罗斯。随着斯堪的纳维亚基督教化，扩张走向终结。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Vikings.' }
        }
      }
    ]
  },
  'persia': {
    names: { id: 'Persia Kuno', en: 'Ancient Persia', ja: '古代ペルシャ', ko: '고대 페르시아', zh: '古代波斯' },
    flag: '🇮🇷',
    articles: [
      {
        id: 'persia-achaemenid',
        langs: {
          id: { title: 'Kekaisaran Achaemenid — Kekaisaran Pertama Dunia', desc: 'Kekaisaran Persia Achaemenid (550-330 SM) menjadi kekaisaran multinasional pertama dan terbesar dalam sejarah kuno.', content: '<p class="mb-4">Kekaisaran Achaemenid (550-330 SM) didirikan Cyrus Agung mencakup 8 juta km² dan 44% populasi dunia — dari Lembah Indus hingga Libya dan Thrace. Cyrus membebaskan bangsa Yahudi dari perbudakan Babilon — dicatat Alkitab sebagai pembebas. Silinder Cyrus (539 SM) dianggap piagam hak asasi manusia pertama. Darius I membangun Royal Road 2.700 km dan Persepolis. Ditaklukkan Alexander 334-330 SM.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Achaemenid Empire.' },
          en: { title: 'Achaemenid Empire — World's First Empire', desc: 'The Persian Achaemenid Empire (550-330 BCE) became the world's first multinational and largest empire in ancient history.', content: '<p class="mb-4">The Achaemenid Empire (550-330 BCE) founded by Cyrus the Great covered 8 million km² and 44% of the world's population — from the Indus Valley to Libya and Thrace. Cyrus freed the Jews from Babylonian captivity, recorded in the Bible as a liberator. The Cyrus Cylinder (539 BCE) is considered the first human rights charter. Darius I built the 2,700 km Royal Road and Persepolis. Conquered by Alexander 334-330 BCE.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Achaemenid Empire.' },
          ja: { title: 'アケメネス朝 — 世界初の帝国', desc: '紀元前550-330年のペルシャ・アケメネス朝が世界初の多民族帝国となった。', content: '<p class="mb-4">アケメネス朝（紀元前550-330年）はキュロス大王が創建し、800万平方キロ・世界人口44%を支配。インダス川流域からリビア・トラキアまで広がりました。キュロスはバビロン捕囚のユダヤ人を解放し聖書に記されました。キュロスの円筒は史上初の人権宣言。ダレイオス1世が2,700kmの王の道とペルセポリスを建設。アレクサンドロスに紀元前334-330年に征服されました。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Achaemenid Empire.' },
          ko: { title: '아케메네스 왕조 — 세계 최초의 제국', desc: '기원전 550-330년의 페르시아 아케메네스 제국이 세계 최초의 다민족 제국이 되었다.', content: '<p class="mb-4">아케메네스 제국(기원전 550-330년)은 키루스 대왕이 창건하여 800만 km²와 세계 인구 44%를 지배했습니다. 인더스 계곡에서 리비아·트라키아까지 뻗어 있었습니다. 키루스는 바빌론 포로 유대인을 해방하여 성경에 기록되었습니다. 키루스 실린더는 최초의 인권 선언으로 여겨집니다. 다리우스 1세가 2,700km 왕의 도로와 페르세폴리스를 건설했습니다. 기원전 334-330년 알렉산더에게 정복되었습니다.</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Achaemenid Empire.' },
          zh: { title: '阿契美尼德帝国 — 世界上第一个帝国', desc: '公元前550-330年的波斯阿契美尼德帝国成为世界第一个多民族帝国。', content: '<p class="mb-4">阿契美尼德帝国（公元前550-330年）由居鲁士大帝创建，覆盖800万平方公里和世界人口的44%，从印度河流域延伸至利比亚和色雷斯。居鲁士释放了被巴比伦囚禁的犹太人，被圣经记载。居鲁士圆筒是最早的人权宣言。大流士一世建造了2,700公里御道和波斯波利斯。公元前334-330年被亚历山大征服。</p>', sourceDomain: 'worldhistory.org', sourceSnippet: 'World History Encyclopedia — Achaemenid Empire.' }
        }
      }
    ]
  }

}
