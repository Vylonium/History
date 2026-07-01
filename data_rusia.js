const countries = {
  'rusia': {
    names: { id: 'Rusia', en: 'Russia', ja: 'ロシア', ko: '러시아', zh: '俄罗斯' },
    flag: '🇷🇺',
    articles: [
      {
        id: 'rusia-ivan-3-great',
        langs: {
          id: { title: 'Kerajaan Moskow di Bawah Ivan III', desc: 'Ivan III yang menyatukan tanah Rusia dari jajahan Tatar', content: 'Ivan III memimpin Kerajaan Moskow dari 1462-1505 dan menyatukan kerajaan-kerajaan Rusia yang terfragmentasi. Dia juga membebaskan Rusia dari dominasi Golden Horde Tatar.', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Ivan III of Russia' },
          en: { title: 'Moscow Under Ivan III the Great', desc: 'Ivan III unified Russian principalities and freed Russia from Tatar rule', content: 'Ivan III ruled the Grand Duchy of Moscow from 1462-1505 and successfully unified fragmented Russian principalities. He also liberated Russia from Tatar Golden Horde domination.', sourceDomain: 'en.wikipedia.org', sourceSnippet: 'Ivan III of Russia' },
          ja: { title: 'イヴァン3世下のモスクワ公国', desc: 'ロシア領土を統一しタタール支配から解放したイヴァン3世', content: 'イヴァン3世は1462-1505年にモスクワ公国を統治し、分裂したロシア公国を統一することに成功しました。彼はまたゴールデンホルデのタタール支配からロシアを解放しました。', sourceDomain: 'ja.wikipedia.org', sourceSnippet: 'イヴァン3世' },
          ko: { title: '이반 3세 시대의 모스크바 공국', desc: '러시아 영토를 통일하고 타타르 지배에서 해방한 이반 3세', content: '이반 3세는 1462-1505년 모스크바 공국을 통치했으며 분열된 러시아 공국들의 통일에 성공했습니다. 그는 또한 타타르 황금 호드 지배에서 러시아를 해방했습니다.', sourceDomain: 'ko.wikipedia.org', sourceSnippet: '이반 3세' },
          zh: { title: '伊万三世统治下的莫斯科公国', desc: '统一俄罗斯领土并摆脱鞑靼统治的伊万三世', content: '伊万三世统治莫斯科公国1462-1505年间，成功统一了分裂的俄罗斯公国。他还将俄罗斯从鞑靼黄金帐汗国统治中解放出来。', sourceDomain: 'zh.wikipedia.org', sourceSnippet: '伊万三世' }
        }
      }
    
      ,
      {
        id: 'rusia-perang-ukraina-2022',
        langs: {
          id: {
            title: 'Invasi Rusia ke Ukraina 2022',
            desc: 'Perang terbesar di Eropa sejak Perang Dunia II yang dimulai 24 Februari 2022 ketika Rusia melancarkan invasi skala penuh ke Ukraina.',
            content: '<p class="mb-4">Pada 24 Februari 2022 dini hari, Presiden Vladimir Putin mengumumkan "operasi militer khusus" dan Rusia melancarkan invasi skala penuh ke Ukraina dari tiga arah: utara dari Belarus menuju Kyiv, timur dari Rusia ke Donbas, dan selatan dari Krimea. Ini adalah eskalasi dari konflik yang sudah berlangsung sejak aneksasi Krimea 2014.</p><p class="mb-4">Dalam 72 jam pertama, pasukan Rusia berusaha merebut Kyiv namun gagal karena perlawanan sengit tentara Ukraina dan warga sipil bersenjata. Konvoi kendaraan militer Rusia sepanjang 64 km yang sempat viral di media sosial akhirnya mundur pada awal April 2022.</p><p class="mb-4">Perang ini memicu gelombang sanksi ekonomi terbesar dalam sejarah terhadap Rusia — lebih dari 40 negara membekukan aset Rusia, mengusir bank Rusia dari sistem SWIFT, dan menghentikan ekspor teknologi canggih ke Rusia. Lebih dari 1.000 perusahaan multinasional meninggalkan pasar Rusia.</p><p class="mb-4">Amerika Serikat, Uni Eropa, dan NATO memberikan bantuan militer senilai ratusan miliar dolar kepada Ukraina, termasuk sistem senjata canggih seperti HIMARS, Patriot, dan F-16. Lebih dari 6 juta warga Ukraina mengungsi ke luar negeri — krisis pengungsi terbesar di Eropa sejak Perang Dunia II.</p><p class="mb-4">Hingga 2025, perang masih berlangsung dengan garis depan yang bergerak perlahan di wilayah timur dan selatan Ukraina. Korban jiwa dari kedua pihak diperkirakan ratusan ribu orang. Perang ini secara fundamental mengubah tatanan keamanan Eropa, mendorong Finlandia dan Swedia bergabung dengan NATO.</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — Russia-Ukraine war: Full coverage of the 2022 invasion, frontline updates, and international response.'
          },
          en: {
            title: 'Russia\'s Invasion of Ukraine 2022',
            desc: 'The largest war in Europe since World War II, launched on February 24, 2022 when Russia began a full-scale invasion of Ukraine.',
            content: '<p class="mb-4">On the morning of February 24, 2022, President Vladimir Putin announced a "special military operation" and Russia launched a full-scale invasion of Ukraine from three directions: north from Belarus toward Kyiv, east from Russia into Donbas, and south from Crimea. This was an escalation of the conflict that began with Russia\'s annexation of Crimea in 2014.</p><p class="mb-4">Within the first 72 hours, Russian forces attempted to capture Kyiv but failed due to fierce resistance from Ukrainian troops and armed civilians. A 64 km Russian military convoy that went viral on social media eventually retreated in early April 2022.</p><p class="mb-4">The war triggered the largest economic sanctions in history against Russia — over 40 countries froze Russian assets, expelled Russian banks from the SWIFT system, and stopped exports of advanced technology to Russia. Over 1,000 multinational companies left the Russian market.</p><p class="mb-4">The US, EU, and NATO provided Ukraine with hundreds of billions in military aid, including advanced weapons systems like HIMARS, Patriot missiles, and F-16 jets. Over 6 million Ukrainians fled abroad — the largest refugee crisis in Europe since World War II.</p><p class="mb-4">As of 2025, the war continues with frontlines moving slowly in eastern and southern Ukraine. Casualties from both sides are estimated in the hundreds of thousands. The war fundamentally reshaped European security, pushing Finland and Sweden to join NATO.</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — Russia-Ukraine war: Full coverage of the 2022 invasion, frontlines, and international response.'
          },
          ja: {
            title: '2022年ロシアのウクライナ侵攻',
            desc: '2022年2月24日に始まった第二次世界大戦以来ヨーロッパ最大の戦争。',
            content: '<p class="mb-4">2022年2月24日未明、プーチン大統領が「特別軍事作戦」を宣言し、ロシアはウクライナへの全面侵攻を開始しました。ベラルーシからキーウ方面、東部ドンバス方面、クリミアから南部の三方向から侵攻しました。</p><p class="mb-4">最初の72時間でロシア軍はキーウ占領を試みましたが、ウクライナ軍と武装市民の激しい抵抗により失敗。全長64kmのロシア軍車列はSNSで拡散し、2022年4月初旬に撤退しました。</p><p class="mb-4">この戦争はロシアに対する史上最大の経済制裁を引き起こし、40カ国以上がロシアの資産を凍結しSWIFTからの排除を実施。1,000社以上の多国籍企業がロシア市場を撤退しました。</p><p class="mb-4">2025年現在も東部・南部ウクライナで戦闘が続いており、双方の死傷者は数十万人に上ると推定されています。フィンランドとスウェーデンがNATOに加盟し欧州安全保障は根本的に変わりました。</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — ロシア・ウクライナ戦争：2022年侵攻の全容と国際社会の対応。'
          },
          ko: {
            title: '2022년 러시아의 우크라이나 침공',
            desc: '2022년 2월 24일 러시아가 우크라이나에 대한 전면 침공을 개시한 2차 세계대전 이후 유럽 최대의 전쟁.',
            content: '<p class="mb-4">2022년 2월 24일 새벽, 푸틴 대통령은 "특별 군사 작전"을 선언하고 러시아는 벨라루스에서 키이우 방면, 동부 돈바스 방면, 크림반도에서 남부 방면 등 세 방향에서 우크라이나 전면 침공을 시작했습니다.</p><p class="mb-4">초반 72시간 동안 러시아군은 키이우 점령을 시도했으나 우크라이나군과 무장 시민의 격렬한 저항으로 실패했습니다. SNS에서 화제가 된 64km 러시아군 차량 행렬은 2022년 4월 초 철수했습니다.</p><p class="mb-4">이 전쟁은 러시아에 대한 역사상 최대 규모의 경제 제재를 촉발했으며, 40개국 이상이 러시아 자산을 동결하고 SWIFT에서 배제했습니다. 2025년 현재도 동부·남부 우크라이나에서 전투가 계속되고 있습니다.</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — 러시아-우크라이나 전쟁: 2022년 침공 전모와 국제사회의 대응.'
          },
          zh: {
            title: '2022年俄罗斯入侵乌克兰',
            desc: '2022年2月24日俄罗斯对乌克兰发动全面入侵，这是二战以来欧洲最大规模的战争。',
            content: '<p class="mb-4">2022年2月24日凌晨，普京总统宣布"特别军事行动"，俄罗斯从三个方向对乌克兰发动全面入侵：从白俄罗斯向基辅方向、从俄罗斯向东部顿巴斯方向、从克里米亚向南部方向。</p><p class="mb-4">最初72小时内，俄军试图占领基辅，但遭到乌克兰军队和武装平民的激烈抵抗而失败。那支长达64公里的俄军车队在社交媒体广泛传播后，于2022年4月初撤退。</p><p class="mb-4">这场战争引发了针对俄罗斯的史上最大规模经济制裁，40多个国家冻结俄罗斯资产并将其排除出SWIFT系统。截至2025年，战斗仍在乌克兰东部和南部继续。</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — 俄乌战争：2022年入侵全程报道及国际社会回应。'
          }
        }
      },
      {
        id: 'rusia-peter-the-great',
        langs: {
          id: {
            title: 'Peter Agung: Tsar yang Membawa Rusia ke Era Modern',
            desc: 'Tsar Rusia yang melakukan reformasi besar-besaran, membangun angkatan laut dari nol, dan mendirikan St. Petersburg sebagai jendela Rusia ke Eropa.',
            content: '<p class="mb-4">Peter I (1672–1725), dikenal sebagai Peter Agung, adalah salah satu pemimpin paling transformatif dalam sejarah Rusia. Ketika naik takhta, Rusia adalah negara terbelakang yang terisolasi dari perkembangan Eropa. Dalam satu generasi, ia mengubahnya menjadi kekuatan besar yang disegani.</p><p class="mb-4">Peter melakukan perjalanan penyamaran selama 18 bulan ke Eropa Barat (1697–1698) dalam rombongan yang dikenal sebagai <strong>Grand Embassy</strong> — bahkan bekerja sebagai buruh galangan kapal di Belanda dan Inggris untuk mempelajari teknologi pembuatan kapal secara langsung. Ia kembali ke Rusia membawa ratusan ahli Eropa.</p><p class="mb-4">Reformasinya mencakup hampir semua aspek kehidupan: ia membangun <strong>Angkatan Laut Rusia</strong> dari nol, mewajibkan para bangsawan (boyar) memotong jenggot panjang mereka dan mengenakan pakaian Eropa, memperkenalkan kalender Julian, mendirikan akademi ilmu pengetahuan, dan merombak sistem pemerintahan.</p><p class="mb-4">Pada 1703, Peter mendirikan kota baru <strong>St. Petersburg</strong> di rawa-rawa delta Sungai Neva — sebuah proyek kolosal yang memakan korban puluhan ribu pekerja paksa. Kota ini dirancang sebagai "jendela ke Eropa" dan menjadi ibu kota Rusia hingga 1918.</p><p class="mb-4">Kemenangan Peter atas Swedia di <strong>Pertempuran Poltava (1709)</strong> mengukuhkan Rusia sebagai kekuatan utama di Eropa Timur dan mengakhiri dominasi Swedia di Baltik. Setelah kemenangan ini, ia memproklamasikan Kekaisaran Rusia dan dirinya sendiri sebagai Kaisar pertama Rusia.</p>',
            sourceDomain: 'britannica.com',
            sourceSnippet: 'Encyclopaedia Britannica — Peter the Great: Russian tsar who modernized Russia and founded St. Petersburg.'
          },
          en: {
            title: 'Peter the Great: The Tsar Who Brought Russia into the Modern Era',
            desc: 'The Russian tsar who carried out sweeping reforms, built a navy from scratch, and founded St. Petersburg as Russia\'s window to Europe.',
            content: '<p class="mb-4">Peter I (1672–1725), known as Peter the Great, was one of the most transformative leaders in Russian history. When he came to power, Russia was a backward state isolated from European developments. In a single generation, he transformed it into a respected great power.</p><p class="mb-4">Peter made an 18-month incognito journey to Western Europe (1697–1698) known as the <strong>Grand Embassy</strong> — even working as a laborer in Dutch and English shipyards to personally learn shipbuilding technology. He returned to Russia with hundreds of European experts.</p><p class="mb-4">His reforms covered nearly every aspect of life: he built the <strong>Russian Navy</strong> from scratch, required nobles (boyars) to cut their long beards and wear European clothing, introduced the Julian calendar, founded the Academy of Sciences, and overhauled the government system.</p><p class="mb-4">In 1703, Peter founded the new city of <strong>St. Petersburg</strong> on the marshes of the Neva River delta — a colossal project that cost tens of thousands of forced laborers their lives. The city was designed as a "window to Europe" and served as Russia\'s capital until 1918.</p><p class="mb-4">Peter\'s victory over Sweden at the <strong>Battle of Poltava (1709)</strong> established Russia as a major power in Eastern Europe and ended Sweden\'s Baltic dominance. After this victory, he proclaimed the Russian Empire and himself as Russia\'s first Emperor.</p>',
            sourceDomain: 'britannica.com',
            sourceSnippet: 'Encyclopaedia Britannica — Peter the Great: tsar who modernized Russia and founded St. Petersburg.'
          },
          ja: {
            title: 'ピョートル大帝：ロシアを近代に導いた皇帝',
            desc: '大改革を断行し海軍を一から建設しサンクトペテルブルクを建設したロシア皇帝。',
            content: '<p class="mb-4">ピョートル1世（1672–1725）はロシア史上最も変革的な指導者の一人です。即位時のロシアはヨーロッパから孤立した後進国でしたが、彼は一世代でロシアを大国へと変えました。</p><p class="mb-4">1697–1698年、ピョートルは<strong>大使節団</strong>として西ヨーロッパを18ヶ月間視察し、オランダや英国の造船所で職人として働き技術を直接習得。数百人のヨーロッパ専門家をロシアに連れ帰りました。</p><p class="mb-4">1703年、ネヴァ川デルタの湿地帯に<strong>サンクトペテルブルク</strong>を建設。「ヨーロッパへの窓」として設計されたこの都市は1918年まで首都でした。</p><p class="mb-4"><strong>ポルタヴァの戦い（1709年）</strong>でスウェーデンに勝利し、ロシアはバルト海の覇権を確立。ピョートルはロシア帝国を宣言し初代皇帝となりました。</p>',
            sourceDomain: 'britannica.com',
            sourceSnippet: 'Encyclopaedia Britannica — ピョートル大帝：ロシアを近代化し聖ペテルブルクを建設した皇帝。'
          },
          ko: {
            title: '표트르 대제: 러시아를 근대로 이끈 황제',
            desc: '대대적인 개혁을 단행하고 해군을 창설하며 상트페테르부르크를 건설한 러시아 황제.',
            content: '<p class="mb-4">표트르 1세(1672–1725)는 러시아 역사상 가장 변혁적인 지도자 중 한 명입니다. 즉위 당시 러시아는 유럽에서 고립된 후진국이었으나, 그는 한 세대 만에 러시아를 강대국으로 변모시켰습니다.</p><p class="mb-4">1697–1698년 <strong>대사절단</strong>으로 서유럽을 18개월간 시찰하며 네덜란드와 영국의 조선소에서 직접 일하며 기술을 습득했습니다. 수백 명의 유럽 전문가를 러시아로 데려왔습니다.</p><p class="mb-4">1703년 네바강 삼각주 습지에 <strong>상트페테르부르크</strong>를 건설했습니다. "유럽으로의 창"으로 설계된 이 도시는 1918년까지 수도였습니다. <strong>폴타바 전투(1709년)</strong>에서 스웨덴에 승리하여 러시아 제국을 선포했습니다.</p>',
            sourceDomain: 'britannica.com',
            sourceSnippet: 'Encyclopaedia Britannica — 표트르 대제: 러시아를 근대화하고 상트페테르부르크를 건설한 황제.'
          },
          zh: {
            title: '彼得大帝：将俄罗斯带入现代的沙皇',
            desc: '进行大规模改革、从零建立海军并创建圣彼得堡作为俄罗斯通往欧洲之窗的俄国沙皇。',
            content: '<p class="mb-4">彼得一世（1672–1725）是俄罗斯历史上最具变革性的领导人之一。即位时，俄罗斯是一个与欧洲发展隔绝的落后国家，但他在一代人的时间内将其变成了受人尊敬的大国。</p><p class="mb-4">1697–1698年，彼得以<strong>大使团</strong>名义赴西欧考察18个月，甚至在荷兰和英国造船厂亲自做工学习造船技术，带回数百名欧洲专家。</p><p class="mb-4">1703年，他在涅瓦河三角洲沼泽地建立了<strong>圣彼得堡</strong>，作为"通往欧洲的窗口"，该城直到1918年都是俄国首都。在<strong>波尔塔瓦战役（1709年）</strong>中击败瑞典后，他宣布建立俄罗斯帝国并成为首位皇帝。</p>',
            sourceDomain: 'britannica.com',
            sourceSnippet: 'Encyclopaedia Britannica — 彼得大帝：使俄罗斯现代化并建立圣彼得堡的沙皇。'
          }
        }
      },
      {
        id: 'rusia-revolusi-1917',
        langs: {
          id: {
            title: 'Revolusi Rusia 1917: Lahirnya Uni Soviet',
            desc: 'Dua revolusi bersejarah yang menggulingkan Tsar Nicholas II dan mendirikan pemerintahan Bolshevik Lenin — mengubah sejarah dunia selamanya.',
            content: '<p class="mb-4">Tahun 1917 menyaksikan dua revolusi yang mengguncang dunia. <strong>Revolusi Februari</strong> (Maret dalam kalender modern) terjadi ketika rakyat yang lelah oleh perang, kelaparan, dan pemerintahan yang korup turun ke jalan-jalan Petrograd. Tsar Nicholas II terpaksa turun takhta pada 15 Maret 1917 — mengakhiri 300 tahun Dinasti Romanov.</p><p class="mb-4">Pemerintah sementara yang lemah melanjutkan partisipasi Rusia dalam Perang Dunia I — sebuah kesalahan fatal. Vladimir Lenin, pemimpin kaum Bolshevik, kembali dari pengasingan di Swiss dengan bantuan kereta khusus dari Jerman (yang berharap Rusia akan keluar dari perang).</p><p class="mb-4"><strong>Revolusi Oktober</strong> (November dalam kalender modern) terjadi pada 7 November 1917. Pasukan Bolshevik yang terorganisir merebut gedung-gedung pemerintahan di Petrograd dalam semalam, hampir tanpa pertumpahan darah. Pemerintah sementara di Istana Musim Dingin menyerah.</p><p class="mb-4">Lenin segera menandatangani <strong>Perjanjian Brest-Litovsk</strong> (1918) dengan Jerman, mengeluarkan Rusia dari Perang Dunia I dengan mengorbankan wilayah yang sangat besar — termasuk Ukraina, Belarus, dan negara-negara Baltik. Ini memicu Perang Saudara Rusia yang brutal antara Bolshevik (Tentara Merah) dan lawan-lawan mereka (Tentara Putih) hingga 1922.</p><p class="mb-4">Pada 1922, <strong>Uni Soviet</strong> (USSR) resmi diproklamasikan. Eksperimen komunis ini bertahan hingga 1991 dan mempengaruhi sejarah dunia selama hampir 70 tahun, menciptakan perlombaan senjata nuklir, Perang Dingin, dan perlombaan luar angkasa.</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — Russian Revolution 1917: February and October revolutions, Lenin and the birth of the Soviet Union.'
          },
          en: {
            title: 'Russian Revolution 1917: Birth of the Soviet Union',
            desc: 'Two historic revolutions that overthrew Tsar Nicholas II and established Lenin\'s Bolshevik government — changing world history forever.',
            content: '<p class="mb-4">The year 1917 witnessed two world-shaking revolutions. The <strong>February Revolution</strong> (March in the modern calendar) occurred when people exhausted by war, famine, and corrupt government took to the streets of Petrograd. Tsar Nicholas II was forced to abdicate on March 15, 1917 — ending 300 years of the Romanov Dynasty.</p><p class="mb-4">The weak provisional government continued Russia\'s participation in World War I — a fatal mistake. Vladimir Lenin, the Bolshevik leader, returned from exile in Switzerland on a special train arranged by Germany (which hoped Russia would leave the war).</p><p class="mb-4">The <strong>October Revolution</strong> (November in the modern calendar) happened on November 7, 1917. Organized Bolshevik forces seized government buildings in Petrograd overnight, almost without bloodshed. The provisional government at the Winter Palace surrendered.</p><p class="mb-4">Lenin immediately signed the <strong>Treaty of Brest-Litovsk</strong> (1918) with Germany, withdrawing Russia from WWI at the cost of enormous territories — including Ukraine, Belarus, and the Baltic states. This triggered the brutal Russian Civil War between Bolsheviks (Red Army) and their opponents (White Army) until 1922.</p><p class="mb-4">In 1922, the <strong>Soviet Union</strong> (USSR) was officially proclaimed. This communist experiment lasted until 1991 and influenced world history for nearly 70 years, creating the nuclear arms race, Cold War, and space race.</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — Russian Revolution 1917: February and October revolutions, Lenin and birth of the Soviet Union.'
          },
          ja: {
            title: '1917年ロシア革命：ソビエト連邦の誕生',
            desc: 'ニコライ2世を打倒しレーニンのボルシェビキ政権を樹立した二つの歴史的革命。',
            content: '<p class="mb-4">1917年、世界を震撼させる二つの革命が起きました。<strong>二月革命</strong>では戦争・飢饉・腐敗した政府に疲弊した民衆がペトログラードの街頭に溢れ、1917年3月15日にニコライ2世が退位——ロマノフ王朝300年の歴史が終わりました。</p><p class="mb-4">レーニン率いるボルシェビキは1917年11月7日の<strong>十月革命</strong>でほぼ無血のうちにペトログラードの政府施設を掌握。臨時政府は降伏しました。</p><p class="mb-4">1918年のブレスト＝リトフスク条約でロシアは第一次世界大戦から離脱。1922年に<strong>ソビエト連邦</strong>が正式に成立し、1991年まで続く共産主義実験が始まりました。</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — 1917年ロシア革命：二月・十月革命とソビエト連邦の誕生。'
          },
          ko: {
            title: '1917년 러시아 혁명: 소련의 탄생',
            desc: '니콜라이 2세를 타도하고 레닌의 볼셰비키 정권을 수립한 두 개의 역사적 혁명.',
            content: '<p class="mb-4">1917년에는 세계를 뒤흔든 두 차례의 혁명이 일어났습니다. <strong>2월 혁명</strong>에서 전쟁·기아·부패한 정부에 지친 민중이 페트로그라드 거리로 쏟아졌고, 1917년 3월 15일 니콜라이 2세가 퇴위하여 300년 로마노프 왕조가 막을 내렸습니다.</p><p class="mb-4">레닌이 이끄는 볼셰비키는 1917년 11월 7일 <strong>10월 혁명</strong>으로 거의 유혈 없이 페트로그라드 정부 시설을 장악했습니다. 1922년 <strong>소비에트 연방</strong>이 정식 수립되어 1991년까지 이어지는 공산주의 실험이 시작되었습니다.</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — 1917년 러시아 혁명: 2월·10월 혁명과 소비에트 연방의 탄생.'
          },
          zh: {
            title: '1917年俄国革命：苏联的诞生',
            desc: '推翻尼古拉二世并建立列宁布尔什维克政权的两次历史性革命。',
            content: '<p class="mb-4">1917年发生了两场震撼世界的革命。<strong>二月革命</strong>中，厌倦了战争、饥荒和腐败政府的民众涌上彼得格勒街头，1917年3月15日尼古拉二世被迫退位——终结了罗曼诺夫王朝300年的统治。</p><p class="mb-4">列宁领导的布尔什维克于1917年11月7日发动<strong>十月革命</strong>，几乎兵不血刃地占领彼得格勒政府机构。1922年，<strong>苏联</strong>正式成立，开始了持续至1991年的共产主义实验。</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — 1917年俄国革命：二月与十月革命及苏联诞生。'
          }
        }
      },
      {
        id: 'rusia-perang-dingin',
        langs: {
          id: {
            title: 'Perang Dingin: Rusia vs Amerika Serikat 1947–1991',
            desc: 'Persaingan geopolitik dan ideologis selama 44 tahun antara Uni Soviet dan Amerika Serikat yang membentuk tatanan dunia modern.',
            content: '<p class="mb-4">Perang Dingin (1947–1991) adalah konfrontasi ideologis, militer, dan ekonomi antara dua negara adidaya: <strong>Uni Soviet</strong> yang dipimpin ideologi komunisme dan <strong>Amerika Serikat</strong> yang mewakili kapitalisme demokratis. Keduanya tidak pernah bertempur langsung, namun proxy war terjadi di seluruh dunia.</p><p class="mb-4">Titik paling menegangkan adalah <strong>Krisis Rudal Kuba 1962</strong> — ketika Uni Soviet menempatkan rudal nuklir di Kuba, 90 mil dari Florida. Selama 13 hari, dunia berada di ambang perang nuklir sebelum Presiden Kennedy dan Khrushchev mencapai kesepakatan diplomatik.</p><p class="mb-4">Persaingan juga merambah luar angkasa: Uni Soviet unggul di awal dengan meluncurkan <strong>Sputnik</strong> (1957, satelit pertama) dan mengorbitkan <strong>Yuri Gagarin</strong> (1961, manusia pertama di luar angkasa). Amerika merespons dengan mendarat di Bulan pada 1969 dalam misi Apollo 11.</p><p class="mb-4">Proxy war terjadi di Korea (1950–1953), Vietnam (1955–1975), Afghanistan (1979–1989), dan di banyak negara Afrika dan Amerika Latin. Jutaan orang tewas dalam konflik-konflik ini yang sejatinya adalah pertarungan antara dua ideologi besar.</p><p class="mb-4">Perang Dingin berakhir ketika Uni Soviet runtuh pada <strong>25 Desember 1991</strong>. Mikhail Gorbachev, dengan kebijakan <em>glasnost</em> (keterbukaan) dan <em>perestroika</em> (restrukturisasi), tidak sengaja memicu keruntuhan sistem Soviet. Runtuhnya Tembok Berlin (1989) menjadi simbol berakhirnya era ini.</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — The Cold War: Soviet-American rivalry, nuclear arms race, and the collapse of the USSR.'
          },
          en: {
            title: 'The Cold War: Russia vs United States 1947–1991',
            desc: 'The 44-year geopolitical and ideological rivalry between the Soviet Union and the United States that shaped the modern world order.',
            content: '<p class="mb-4">The Cold War (1947–1991) was an ideological, military, and economic confrontation between two superpowers: the <strong>Soviet Union</strong> representing communism and the <strong>United States</strong> representing democratic capitalism. The two never directly fought, but proxy wars erupted worldwide.</p><p class="mb-4">The most tense moment was the <strong>Cuban Missile Crisis of 1962</strong> — when the Soviet Union placed nuclear missiles in Cuba, 90 miles from Florida. For 13 days the world teetered on the brink of nuclear war before Presidents Kennedy and Khrushchev reached a diplomatic agreement.</p><p class="mb-4">Competition extended to space: the Soviets led early by launching <strong>Sputnik</strong> (1957, first satellite) and orbiting <strong>Yuri Gagarin</strong> (1961, first human in space). America responded by landing on the Moon in 1969 with Apollo 11.</p><p class="mb-4">The Cold War ended when the Soviet Union collapsed on <strong>December 25, 1991</strong>. Mikhail Gorbachev\'s <em>glasnost</em> (openness) and <em>perestroika</em> (restructuring) policies inadvertently triggered the collapse of the Soviet system. The fall of the Berlin Wall (1989) became the era\'s defining symbol.</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — The Cold War: Soviet-American rivalry, Cuban Missile Crisis, and collapse of the USSR.'
          },
          ja: {
            title: '冷戦：ソ連対アメリカ1947–1991',
            desc: 'ソビエト連邦とアメリカが44年間繰り広げた地政学的・イデオロギー的対立。',
            content: '<p class="mb-4">冷戦（1947–1991）は<strong>ソビエト連邦</strong>と<strong>アメリカ合衆国</strong>の間のイデオロギー・軍事・経済的対立でした。両国は直接戦わず、代理戦争が世界各地で展開されました。</p><p class="mb-4">最も緊張した瞬間は<strong>キューバ危機（1962年）</strong>——ソ連がキューバに核ミサイルを配備し、13日間世界が核戦争の瀬戸際に立ちました。</p><p class="mb-4">宇宙開発競争ではソ連が先行し<strong>スプートニク</strong>（1957年）と<strong>ガガーリン</strong>（1961年）で圧倒。アメリカはアポロ11号（1969年）の月面着陸で応えました。<strong>ベルリンの壁崩壊（1989年）</strong>とゴルバチョフの<em>グラスノスチ</em>・<em>ペレストロイカ</em>政策がソ連崩壊を招き1991年12月25日に冷戦は終結しました。</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — 冷戦：ソ連とアメリカの対立、核軍拡競争、ソ連崩壊。'
          },
          ko: {
            title: '냉전: 러시아 대 미국 1947–1991',
            desc: '소련과 미국 사이의 44년간의 지정학적·이념적 대립이 현대 세계 질서를 형성했다.',
            content: '<p class="mb-4">냉전(1947–1991)은 <strong>소비에트 연방</strong>과 <strong>미국</strong> 사이의 이념적·군사적·경제적 대립이었습니다. 양국은 직접 교전하지 않았지만 전 세계에서 대리전이 벌어졌습니다.</p><p class="mb-4">가장 긴장된 순간은 <strong>쿠바 미사일 위기(1962년)</strong>——소련이 쿠바에 핵미사일을 배치하자 13일간 세계가 핵전쟁 직전까지 치달았습니다. 우주 경쟁에서는 소련이 스푸트니크(1957년)와 가가린(1961년)으로 앞섰고, 미국은 아폴로 11호(1969년) 달 착륙으로 응수했습니다.</p><p class="mb-4"><strong>베를린 장벽 붕괴(1989년)</strong>와 고르바초프의 <em>글라스노스트</em>·<em>페레스트로이카</em> 정책이 소련 붕괴를 촉발하여 1991년 12월 25일 냉전이 종결되었습니다.</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — 냉전: 소련-미국 대립, 쿠바 미사일 위기, 소련 붕괴.'
          },
          zh: {
            title: '冷战：俄罗斯对美国 1947–1991',
            desc: '苏联与美国之间持续44年的地缘政治和意识形态对抗塑造了现代世界秩序。',
            content: '<p class="mb-4">冷战（1947–1991）是<strong>苏联</strong>与<strong>美国</strong>之间的意识形态、军事和经济对抗。两国从未直接交战，但代理战争遍及全球。</p><p class="mb-4">最紧张的时刻是<strong>1962年古巴导弹危机</strong>——苏联在距佛罗里达仅90英里的古巴部署核导弹，13天内世界濒临核战争边缘。太空竞赛中，苏联率先发射<strong>斯普特尼克</strong>（1957年）并将<strong>加加林</strong>送入轨道（1961年），美国以1969年阿波罗11号登月作答。</p><p class="mb-4"><strong>柏林墙倒塌（1989年）</strong>与戈尔巴乔夫的<em>公开性</em>和<em>重建</em>政策无意间引发了苏联解体，冷战于1991年12月25日结束。</p>',
            sourceDomain: 'history.com',
            sourceSnippet: 'History.com — 冷战：苏美对抗、古巴导弹危机与苏联解体。'
          }
        }
      },
      {
        id: 'rusia-runtuh-uni-soviet',
        langs: {
          id: {
            title: 'Runtuhnya Uni Soviet 1991: Akhir Sebuah Imperium',
            desc: 'Bagaimana salah satu negara terkuat di dunia bubar dalam waktu kurang dari dua tahun dan melahirkan 15 negara baru.',
            content: '<p class="mb-4">Pada <strong>25 Desember 1991</strong>, Mikhail Gorbachev menyampaikan pidato pengunduran dirinya sebagai Presiden Uni Soviet di televisi. Bendera Soviet diturunkan dari Kremlin dan digantikan bendera Rusia. Dalam semalam, sebuah negara dengan 290 juta penduduk dan 15 republik secara resmi tidak ada lagi.</p><p class="mb-4">Keruntuhan dimulai dengan kebijakan reformasi Gorbachev: <strong>glasnost</strong> (keterbukaan pers dan politik) dan <strong>perestroika</strong> (restrukturisasi ekonomi). Alih-alih menyelamatkan sistem, reformasi ini justru membuka kotak Pandora — kritik publik terhadap pemerintah Soviet bermunculan, nasionalisme di republik-republik pinggiran bangkit, dan ekonomi semakin parah.</p><p class="mb-4">Percobaan kudeta oleh garis keras komunis pada <strong>Agustus 1991</strong> — yang mencoba menahan Gorbachev dan merebut kekuasaan — justru mempercepat keruntuhan. Boris Yeltsin, Presiden Rusia, naik ke tank di depan Gedung Parlemen Rusia dan berpidato menentang kudeta. Kudeta gagal dalam 3 hari.</p><p class="mb-4">Satu per satu, 15 republik Soviet mendeklarasikan kemerdekaan. Negara-negara Baltik (Estonia, Latvia, Lithuania) adalah yang pertama dan paling cepat diakui dunia internasional. Ukraina, Kazakhstan, Uzbekistan, Georgia, dan negara-negara lainnya menyusul.</p><p class="mb-4">Bagi jutaan warga Rusia, keruntuhan Soviet adalah trauma yang hingga kini belum sembuh. Vladimir Putin menyebut runtuhnya Uni Soviet sebagai "bencana geopolitik terbesar abad ke-20". Kerinduan akan kejayaan Soviet era ini menjadi salah satu pendorong psikologis kebijakan ekspansionis Putin di abad ke-21.</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — The fall of the Soviet Union 1991: Gorbachev resignation, the 15 new republics, and Russia\'s identity crisis.'
          },
          en: {
            title: 'The Collapse of the Soviet Union 1991: End of an Empire',
            desc: 'How one of the world\'s most powerful nations dissolved in less than two years and gave birth to 15 new countries.',
            content: '<p class="mb-4">On <strong>December 25, 1991</strong>, Mikhail Gorbachev delivered his resignation speech as Soviet President on television. The Soviet flag was lowered from the Kremlin and replaced by the Russian flag. Overnight, a nation with 290 million people and 15 republics officially ceased to exist.</p><p class="mb-4">The collapse began with Gorbachev\'s reform policies: <strong>glasnost</strong> (press and political openness) and <strong>perestroika</strong> (economic restructuring). Rather than saving the system, these reforms opened Pandora\'s box — public criticism of the Soviet government surged, nationalism in peripheral republics rose, and the economy worsened.</p><p class="mb-4">An attempted coup by communist hardliners in <strong>August 1991</strong> — trying to detain Gorbachev and seize power — actually accelerated the collapse. Boris Yeltsin, President of Russia, climbed atop a tank outside Russia\'s Parliament building and spoke against the coup. The coup failed in 3 days.</p><p class="mb-4">One by one, all 15 Soviet republics declared independence. Today, Putin has called the Soviet collapse "the greatest geopolitical catastrophe of the 20th century" — nostalgia for Soviet glory became a key psychological driver of his 21st-century expansionist policies.</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — The fall of the Soviet Union 1991: Gorbachev, 15 new republics, and Russia\'s identity crisis.'
          },
          ja: {
            title: '1991年ソビエト連邦崩壊：帝国の終焉',
            desc: '世界最強国の一つが2年足らずで解体し15の新国家が生まれた過程。',
            content: '<p class="mb-4">1991年12月25日、ゴルバチョフ書記長はテレビでソ連大統領辞任を表明。クレムリンからソ連国旗が降ろされロシア国旗に替わりました。2億9,000万人・15共和国を擁する国家が一夜にして消滅しました。</p><p class="mb-4">ゴルバチョフの<strong>グラスノスチ</strong>（情報公開）と<strong>ペレストロイカ</strong>（経済再建）改革がパンドラの箱を開け、ソ連体制への批判が噴出。<strong>1991年8月クーデター</strong>失敗がさらに解体を加速しました。</p><p class="mb-4">プーチンはソ連崩壊を「20世紀最大の地政学的悲劇」と呼び、このソ連への郷愁が21世紀の膨張主義政策の心理的原動力となっています。</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — 1991年ソビエト連邦崩壊：ゴルバチョフ、15共和国の独立、ロシアのアイデンティティ危機。'
          },
          ko: {
            title: '1991년 소련 붕괴: 제국의 종말',
            desc: '세계 최강국 중 하나가 2년도 안 되어 해체되고 15개의 새로운 나라가 탄생한 과정.',
            content: '<p class="mb-4">1991년 12월 25일, 고르바초프는 텔레비전을 통해 소련 대통령 사임을 발표했습니다. 크렘린에서 소련 국기가 내려지고 러시아 국기가 게양되었습니다. 2억 9,000만 명·15개 공화국을 가진 국가가 하룻밤 사이에 공식적으로 사라졌습니다.</p><p class="mb-4">고르바초프의 <strong>글라스노스트</strong>와 <strong>페레스트로이카</strong> 개혁이 판도라의 상자를 열었고, <strong>1991년 8월 쿠데타</strong> 실패가 붕괴를 가속화했습니다. 푸틴은 소련 붕괴를 "20세기 최대의 지정학적 재앙"이라 불렀으며, 이 소련에 대한 향수가 21세기 팽창주의 정책의 심리적 동력이 되고 있습니다.</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — 1991년 소련 붕괴: 고르바초프, 15개 신생국, 러시아의 정체성 위기.'
          },
          zh: {
            title: '1991年苏联解体：帝国的终结',
            desc: '世界最强国之一如何在不到两年内解散并诞生15个新国家。',
            content: '<p class="mb-4">1991年12月25日，戈尔巴乔夫通过电视发表辞职演说。苏联国旗从克里姆林宫降下，换上了俄罗斯国旗。一个拥有2.9亿人口和15个加盟共和国的国家，一夜之间正式不复存在。</p><p class="mb-4">戈尔巴乔夫的<strong>公开性</strong>与<strong>重建</strong>改革打开了潘多拉魔盒，<strong>1991年8月政变</strong>的失败进一步加速了解体。普京将苏联解体称为"20世纪最大的地缘政治灾难"，对苏联荣耀的怀念成为他21世纪扩张主义政策的心理驱动力。</p>',
            sourceDomain: 'bbc.com',
            sourceSnippet: 'BBC News — 1991年苏联解体：戈尔巴乔夫、15个新国家与俄罗斯的身份危机。'
          }
        }
      }
    ]
  }
};
