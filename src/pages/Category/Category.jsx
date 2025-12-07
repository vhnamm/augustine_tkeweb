import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from "./Category.module.scss";
import clsx from 'clsx';

const Category = () => {
  const { slug } = useParams();
  
  const [category, setCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    const fetchCategoryData = async () => {
      const cateRawRes = await fetch(`http://localhost:3000/categories?slug=${slug}`)
      const cateRes = await cateRawRes.json()
      console.log(cateRes[0].id)

      const categoryId = cateRes[0].id
      setCategory(categoryId)

      const subcateRawRes = await fetch(`http://localhost:3000/subcategories?categoryId=${categoryId}`)
      const subcateRes = await subcateRawRes.json()
      setSubcategories(subcateRes)
      setLoading(false)
      console.log(subcateRes)
    };
    
    fetchCategoryData();
  }, [slug]);

  useEffect(() => {
    document.body.classList.add("category-page");
    return () => {
      document.body.classList.remove("category-page");
    };
  }, []);

  if (loading) return <div className={clsx(styles.loading)}>Loading...</div>;
  
  

  return (
    <div className={clsx(styles.category_container, "grid wide")}>
      <aside className={styles.parent_categories}>
          <ul className={styles.subcate_wrap}>
            <li className={styles.subcate_item}>
              <Link to={`/category/${slug}`} className={styles["subcate_item-name"]}>All</Link>
            </li>
            {
              subcategories.map((subcategory) => {
                return (<li key={subcategory.id} className={styles.subcate_item}>
                  <Link to={`/category/${slug}/${subcategory.slug}`} className={styles["subcate_item-name"]}>{subcategory.name}</Link>
                </li>)
              })
            }
          </ul>
      </aside>

      {/* Main content area */}
      <main className={clsx(styles.main_content)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta dignissimos ut amet? Iure deserunt voluptates accusamus magni debitis et nam iusto optio, reprehenderit tempore atque sunt fuga tenetur dignissimos?
        Molestiae dolorum sit eos natus culpa vitae quisquam error eveniet, recusandae fuga laboriosam a, iusto exercitationem ab tempore corporis expedita, officiis alias ullam labore. Sapiente vel modi incidunt repudiandae dignissimos?
        Accusamus maxime dolores quia nostrum quod facere ducimus, voluptate enim voluptas reprehenderit vitae. Accusantium libero, culpa maiores tempora nesciunt obcaecati veritatis voluptate iusto deserunt quidem eligendi porro ullam nobis eum.
        Aliquam pariatur at minus necessitatibus nulla sunt itaque adipisci, asperiores eos provident quibusdam sint architecto aspernatur animi deserunt in assumenda quisquam consectetur molestiae eaque non, eveniet cupiditate. Unde, vel aliquid.
        Nemo nobis ratione tenetur numquam odit, eaque modi eveniet vel, hic minus tempore eligendi laborum explicabo amet provident illo optio maiores aperiam cum sapiente earum dolores reprehenderit vero laboriosam? Optio.
        Culpa earum ex voluptatem adipisci est similique delectus numquam autem, obcaecati nam magni, facilis aperiam provident. Obcaecati possimus aperiam recusandae magni voluptate veritatis facilis omnis iusto voluptatibus accusamus, dolore mollitia.
        Eum dignissimos harum itaque pariatur assumenda necessitatibus, quia aspernatur nostrum vel quae! At repellat rem, dolorum atque illum magni maiores ad, nesciunt eveniet velit et perspiciatis nisi ullam eos! Illum.
        Ipsum, obcaecati dignissimos officiis a aspernatur, incidunt laborum quidem libero perspiciatis enim nam inventore ex. Facere officia doloremque deserunt reprehenderit sunt minus quod recusandae voluptatum cum rerum, praesentium dolore earum.
        Praesentium ducimus explicabo, repellat soluta est inventore, ratione eos in incidunt veniam non aut architecto consequatur, dolor sequi impedit voluptatum quos quisquam id. Deserunt in tempore recusandae atque asperiores! Excepturi.
        Ducimus blanditiis dolore sed doloribus nam recusandae nisi, reprehenderit sequi animi, laudantium, debitis non facere ut mollitia sit labore impedit sapiente itaque quos fuga officia quis repudiandae. Delectus, minima ad!
        Illum fugiat, nemo sequi ad, dolor facere totam qui nostrum veritatis aut rem reiciendis voluptates dolores culpa odio! Quia saepe, illum molestias eligendi nemo animi quibusdam modi neque atque eaque?
        Iusto ratione neque quod, nihil dolorem reprehenderit, iure impedit cupiditate ipsam voluptatem dolores deserunt dicta enim laborum, nulla nemo maiores! Atque nisi fugiat suscipit ducimus earum ex quod adipisci dicta?
        Aperiam laborum placeat fugiat magnam aut aliquid voluptate deleniti minus hic quo dicta nesciunt inventore repudiandae maiores iusto animi nostrum vitae laboriosam, asperiores eveniet. Repellendus placeat facere aperiam atque? Quibusdam.
        Ipsum fugit explicabo perspiciatis. Soluta, quisquam dolores, voluptatum voluptates temporibus, explicabo quo alias molestias nesciunt provident numquam corrupti cupiditate quos magni dignissimos vero quod ea corporis hic esse vel culpa!
        Sit repellat obcaecati deserunt inventore sed, tempora quos? Quam veniam enim neque laudantium dolorum, vel voluptas maxime corporis possimus nobis inventore, sed rerum delectus fugit modi rem perferendis aperiam deleniti!
        Eveniet natus fuga, error tempora amet ullam molestiae consectetur recusandae hic omnis culpa blanditiis temporibus est, earum quos quia officiis inventore incidunt pariatur velit! Incidunt nemo eius vero ratione inventore?
        Harum autem perferendis quia ipsum placeat, nemo veniam reiciendis, excepturi magni numquam facere. Eum nesciunt fuga qui porro neque eligendi voluptas temporibus quisquam, cum maxime recusandae molestias eius accusamus odit.
        Culpa quidem autem unde reprehenderit, accusamus sunt repellat alias a corporis ex reiciendis nulla, harum ipsa optio necessitatibus natus nobis maxime distinctio nisi dolore, eveniet adipisci? Iusto unde dignissimos ad.
        Rerum nisi, esse optio eligendi aliquid totam voluptas suscipit eum deleniti veritatis eaque excepturi neque itaque reprehenderit deserunt laudantium culpa rem laborum et porro ea labore. Sunt corrupti culpa nemo.
        Saepe sapiente sint quo distinctio? Asperiores facilis dolor beatae deleniti ipsa itaque. Quas illum aspernatur, soluta incidunt et sequi ducimus voluptatum adipisci aut ipsam, harum sed fuga, quae perspiciatis laudantium.
        Tenetur nam tempore, sed modi placeat esse aut omnis. Magni perspiciatis sit esse tenetur dicta quam? Atque ad, veritatis dicta odio debitis commodi provident rerum quae non quos animi quis?
        Officia aut eligendi officiis dolor rem, totam perspiciatis nostrum error magnam in ipsum consequatur eum! Debitis architecto aperiam numquam quod ea impedit tempora pariatur magni asperiores voluptatem unde, ratione quaerat?
        Enim reprehenderit laborum officiis a repellendus animi quod maxime quibusdam alias. Quo, quasi non odio dolorem culpa, laudantium dolorum, eveniet laborum dolor voluptate quod dignissimos error explicabo quisquam suscipit dolore!
        Mollitia nostrum officia officiis earum, quasi aliquam dolores incidunt deleniti dolorum, eveniet nulla quaerat maiores omnis asperiores porro vero. Tenetur reprehenderit deleniti corporis totam error esse atque quam voluptatem aut.
        Minus sunt quisquam explicabo est necessitatibus, omnis magni aspernatur libero illo quam quis facilis, dolor nemo cupiditate ratione accusantium voluptatum, nulla molestias nostrum maxime. Quibusdam unde magni temporibus qui reiciendis.
        Magni ducimus vitae labore in asperiores omnis, fuga eaque harum placeat esse earum nam, dignissimos non. Vitae magni deleniti deserunt maiores debitis nisi delectus saepe ab incidunt. Non, dolorum odio?
        Similique distinctio repudiandae laudantium autem sed, explicabo illum ducimus quia cupiditate, voluptas perferendis quisquam sint culpa eos voluptatem quod saepe asperiores tempore perspiciatis dolorem temporibus provident. Dolore tempora repudiandae iste.
        Corporis qui esse quidem a voluptatem molestias et deleniti, fugiat in dicta commodi similique optio sequi harum officiis atque numquam aliquam, molestiae maiores cumque libero labore laborum aut! Debitis, autem?
        Dolores recusandae possimus explicabo modi nihil rerum incidunt, quis reprehenderit suscipit libero doloribus culpa, exercitationem, laudantium cum iusto. Vero, deserunt! Consectetur soluta enim temporibus quaerat asperiores a veniam voluptatum unde?
        Sunt maiores numquam eius earum ea rem tempore illum, nulla voluptas reiciendis repudiandae, magni quibusdam iste eveniet recusandae amet optio officiis libero nemo vero consequuntur? Dolores id similique odio tempora.
        Adipisci dolorem, porro beatae deleniti eaque earum dolores nam vero harum illo placeat modi nesciunt, facilis minima animi accusamus cupiditate non tempora laborum id! Distinctio magnam illo eligendi quod officia.
        Architecto molestiae sequi alias, quis culpa voluptatum vero dolor ad vel. Optio ut et in quos incidunt, quae laborum alias laboriosam unde repudiandae at id cupiditate. Praesentium laboriosam necessitatibus perspiciatis!
        Quisquam iure accusamus cum ab voluptatibus unde earum esse commodi aut, rerum aliquid quas quae alias ducimus possimus praesentium mollitia neque aperiam consequatur minus nulla ex molestias? Cupiditate, incidunt sequi?
        Quasi, assumenda! Omnis non fuga cumque consectetur temporibus ad ullam eaque, libero nulla earum consequuntur delectus? Porro sunt dolores reprehenderit assumenda quasi earum. Libero ad officia sit reiciendis exercitationem expedita!
        Excepturi possimus repellat vel quam facilis similique necessitatibus sunt nostrum dolorem neque ea rerum, iste molestiae natus dolore culpa recusandae non nulla sequi error? Voluptatum aperiam inventore quae similique fuga.
        Esse quis voluptate autem cumque veniam necessitatibus nobis dicta sunt asperiores nihil nulla beatae excepturi aperiam incidunt laborum facilis placeat eius iusto doloremque, assumenda sint ducimus? Sed temporibus quisquam veritatis!
        Temporibus, beatae mollitia cumque a ad, facilis sequi dolorem, totam earum exercitationem vitae similique quidem reprehenderit doloribus. Ea quia fugit, earum voluptas, error officia modi quos eligendi illo delectus commodi!
        Doloremque minus modi optio minima recusandae obcaecati voluptates corporis nobis consequuntur fuga in qui eius ipsum nemo, saepe temporibus quibusdam sequi tempora soluta dolorem natus quis atque. Et, sapiente expedita!
        Sapiente aliquam ratione exercitationem ea ad numquam, nulla doloribus rem incidunt eveniet? Fugit quas, sed maxime obcaecati velit necessitatibus saepe itaque recusandae omnis eos? Unde in et illo nemo placeat.
        Sequi deleniti delectus ad excepturi quisquam, illo aliquid explicabo quibusdam aliquam perspiciatis nihil. Impedit numquam est laudantium cumque? Magni totam nobis exercitationem aut repellat laudantium nesciunt labore debitis. Similique, quidem?
        Quae, sequi harum. Facilis nostrum, sequi debitis ipsum eveniet architecto earum tempore molestiae ipsam eos quia! Molestiae beatae doloribus ut recusandae tenetur voluptatem ipsa, excepturi necessitatibus fugiat rem porro vitae?
        Commodi ipsum maiores consectetur. Placeat quaerat, commodi quam iste dicta quasi nulla ut, consectetur, vero tempore dolor! Voluptas saepe fugit qui. Laborum enim dicta atque beatae ipsa? Tempore, deleniti amet.
        Nemo, ut, quod ea consequatur nam eligendi deserunt tenetur quis obcaecati nobis qui delectus similique atque. Incidunt amet commodi est omnis et. Quae libero exercitationem perferendis cumque magnam quia recusandae.
        Libero, cupiditate corporis quis dolorum numquam est beatae? Libero ab nulla eius eveniet suscipit facere aut eaque dolores sapiente et quibusdam repudiandae, amet, inventore doloremque illum dignissimos cum, debitis explicabo.
        Sit eveniet quam reiciendis optio! Quibusdam sunt voluptas odit a animi velit, est incidunt fuga nisi ipsum at aspernatur illo molestias beatae aut numquam tenetur ipsa rerum cupiditate delectus. Omnis!
        Impedit, fuga odit inventore voluptatum qui adipisci beatae deserunt quaerat officiis sequi mollitia sit soluta, ullam quos dolores sapiente tenetur repudiandae itaque eveniet veniam est in labore sunt molestias? Voluptatibus.
        Veniam nam consequatur facere eaque adipisci cum minima recusandae nobis nemo, optio repellat est sunt illum harum doloribus doloremque sed asperiores, laudantium necessitatibus beatae distinctio sapiente commodi! Reiciendis, aperiam. Voluptatem!
        Explicabo, deserunt cumque aut enim quidem quia! At soluta aperiam ipsum iste vel exercitationem provident ducimus eveniet. Autem, dignissimos animi rerum quaerat explicabo voluptatibus magni molestias non aliquam, incidunt cupiditate.
        Accusantium sunt voluptatibus voluptatum facilis consectetur omnis quod quidem voluptate voluptas laborum. Perspiciatis eum, sit nostrum nemo distinctio ab provident omnis. Corrupti libero animi dolor aliquid deserunt, cumque excepturi fugiat?
        Soluta dolores illum necessitatibus quisquam nostrum excepturi distinctio tenetur odit nisi nihil veritatis mollitia reprehenderit ad error culpa enim commodi, accusamus amet earum voluptates, tempore sint possimus recusandae quia! Ipsam?
        Minus id fugiat fuga quisquam commodi voluptate nihil est quas. Unde, suscipit! Id numquam optio pariatur adipisci sit dicta, illum facere explicabo debitis, doloribus vel, voluptate odit. Facilis, quas illum?
        Enim repudiandae praesentium expedita illum in maiores, minima asperiores provident nostrum velit facilis rem, mollitia minus est iste officiis. Id dignissimos, atque non vero amet corporis sit sapiente exercitationem quam!
        Voluptatibus, reprehenderit dolor quibusdam hic, quae officia at vitae quasi sunt laudantium amet eius? In quidem, dolores, facere vero repudiandae delectus illo reprehenderit, corrupti inventore nemo fuga sed magnam voluptatibus.
        Ipsa quaerat eos dolores repellendus fugit quia explicabo dignissimos alias aperiam, inventore ipsam nulla. At nemo voluptatum quos facere error animi commodi unde deserunt dicta, exercitationem sed iusto autem fuga.
        Eaque ducimus deleniti natus asperiores iure repellat, corrupti veritatis distinctio corporis minima explicabo suscipit quae optio fugit, velit cum autem dolore perspiciatis quos vero unde quas labore? Corrupti, unde obcaecati.
        Vel pariatur minima, natus laboriosam, nihil obcaecati quisquam unde sed tempore exercitationem enim! Perferendis doloribus vel minima nemo accusantium expedita repudiandae quos laborum, rerum fuga eum tenetur vero nostrum quibusdam.
        Minus ut exercitationem expedita perferendis corporis soluta distinctio rerum, animi, eum, nostrum saepe? Architecto illo vero fugiat nihil maiores. Ipsa dicta error blanditiis optio vel, a aliquid voluptatem enim consectetur?
        Corporis aliquid numquam culpa ducimus, est molestias provident nam fugiat suscipit ad veritatis assumenda fugit placeat tempora et natus ab animi maiores quaerat itaque cupiditate ea sed voluptates. Ad, minus?
        Vitae illo nisi repellendus possimus provident? Maiores aliquam sed cum eius! Nesciunt repellat impedit possimus ipsum excepturi velit reprehenderit atque distinctio a quos. Asperiores assumenda ullam tempore alias ex perspiciatis?
        Sunt, amet esse. Praesentium, exercitationem? Eveniet similique corporis assumenda omnis dolores aut quam officiis tenetur velit ea accusantium esse error vero blanditiis, nihil nemo iusto deserunt dolorem enim autem eligendi.
        Numquam qui incidunt rerum provident recusandae et voluptatem neque magnam atque sit soluta odio eveniet labore libero aliquid quod, rem iure dolores corporis repellat. Alias officia adipisci doloribus optio sequi!
        Odit voluptatem tempore ad magni vitae aut quis consectetur quasi, autem provident porro eveniet beatae vel. Explicabo obcaecati a exercitationem impedit, magnam, est veritatis accusantium dolorem quasi non incidunt quas.
        Saepe commodi delectus non quis. Maiores optio voluptas eligendi possimus, voluptatem ipsum velit officiis vitae temporibus earum molestiae minima rerum? Exercitationem nisi ratione, quod quaerat optio sunt quis et ad.
        Deleniti nemo enim facere debitis vel cum a commodi ut impedit dolore recusandae et corrupti non ipsum dolor, dolores laboriosam rem sapiente in est! At quod ex maiores dignissimos esse.
        Temporibus sit exercitationem sunt quia eos similique commodi? Exercitationem minus dolor non animi hic voluptates consequuntur culpa ex eos accusamus, reiciendis illum voluptate, alias deserunt placeat odio assumenda? Praesentium, reiciendis?
        Dolore excepturi nisi, unde vero repudiandae sint non eaque praesentium ut, quam nesciunt? Totam necessitatibus, in id ipsam tenetur officia mollitia omnis, minima rem laudantium quidem aspernatur pariatur sed ducimus?
        Ipsa tempora reiciendis sapiente totam eos accusamus ea! Doloribus quasi ipsa, quae blanditiis obcaecati iste eaque ratione, repudiandae eum voluptatum numquam, ducimus quis reprehenderit dolorem qui a rerum eligendi in!
        Veritatis sunt modi dolores quis. Ut nihil est, quam, amet libero culpa modi aperiam iste dolor ad quasi tempore dolore, eligendi quae fuga sunt assumenda non! Laborum eius quas facilis?
        Ipsam, veniam. Distinctio unde dolor vel sint mollitia cumque repudiandae deleniti accusamus magnam dolorum odit delectus molestiae quo, quisquam adipisci non aperiam ipsam debitis nihil fugit, eaque magni maxime sit.
        Vitae saepe repellendus fugiat magnam quo sint perspiciatis corporis eum, corrupti dolore nemo iure deleniti amet a provident delectus dicta ab dolores tempore quaerat debitis commodi rem eius. Eaque, error.
        At qui similique nisi iste. Ut, eligendi nobis natus, modi atque illum eaque, cumque enim pariatur maiores repudiandae praesentium. Dignissimos quos commodi et amet deserunt facilis numquam modi corporis delectus.
        Natus, aliquid nobis sint optio corrupti rerum deleniti quae vero tenetur, qui facere modi officiis amet. Quaerat, nisi labore dicta tempore ut quibusdam molestiae cupiditate, possimus recusandae excepturi maxime sapiente?
        Nihil aperiam eligendi quidem deserunt ratione ipsa impedit praesentium, quas esse rerum fugiat eaque atque ut doloribus sunt dolores tempora quia obcaecati distinctio quibusdam quae tempore earum? Consequatur, aut quasi.
        Deserunt incidunt, tenetur, officia consequuntur atque eius odit alias rem libero eum ducimus voluptatum autem sed aut asperiores esse animi magni a et assumenda nobis dignissimos. Quasi quisquam adipisci nobis!
        Ratione beatae quasi praesentium perferendis hic maiores ut voluptas minus consequatur ullam, autem, excepturi facilis? Id esse corrupti quidem maiores itaque eligendi ipsum, temporibus ut animi quam explicabo, voluptatum perspiciatis!
        Vitae vero, amet excepturi dolorum nisi nobis eaque rerum doloribus maxime natus temporibus porro molestias, iste aliquam obcaecati optio molestiae! Neque voluptates nesciunt ea accusamus illo mollitia. Amet, minus iusto.
        Dolore alias iste pariatur? Voluptatum, natus. Ex quo error illum autem odit impedit, voluptas non voluptatem adipisci fuga tempore consequatur inventore amet? Hic amet beatae voluptatem sed tempore, doloremque explicabo.
        Cum minus tempora deleniti sint ipsa possimus veritatis aspernatur pariatur earum! Modi voluptas hic assumenda beatae, ipsum laudantium, numquam cupiditate est tempora iure iusto maxime earum necessitatibus. Dicta, ab nobis?
        Iure, nulla impedit officiis deleniti quia distinctio nam autem, natus cupiditate non maxime tempore quidem earum doloremque sunt provident vel voluptatum, dolore maiores atque nostrum ex! Nihil explicabo aspernatur officiis?
        Tempora tempore consequuntur, quas omnis molestias totam unde sit earum velit rerum architecto, voluptate fuga recusandae, quasi sequi fugit pariatur impedit. Accusamus recusandae eveniet facere deleniti veniam et, itaque perspiciatis.
        Necessitatibus repellendus amet eaque tempore quis, quo dolorum dolor quae culpa doloribus explicabo, neque enim dolores odit nihil aliquam, temporibus perspiciatis nostrum. Tenetur veniam porro natus, vitae neque saepe accusantium.
        Officia voluptatum maxime blanditiis enim minima possimus autem illo officiis labore. Quos iusto dignissimos perspiciatis omnis commodi quis dolorem amet hic. Voluptates quos laborum mollitia, architecto reprehenderit repellat consequuntur iusto.
        Dicta nostrum corporis odio ullam odit, deleniti voluptates deserunt perferendis modi consectetur enim? Iusto dolorum, minima suscipit repudiandae autem molestias temporibus, voluptas rem sequi doloremque, sapiente dicta quos fugiat consectetur.
        Quo facilis cumque provident pariatur, aut ea eligendi ipsum commodi temporibus accusantium ratione aspernatur. Facilis quidem mollitia quas, aut cumque quisquam temporibus aliquid doloribus atque eos nam quod maiores repellendus?
        Esse saepe voluptas explicabo obcaecati, sequi perspiciatis quod dolorum recusandae et necessitatibus ut porro magnam dolor quo quibusdam accusamus. Laboriosam est optio eos ipsa aliquam officia, minima consequuntur ullam corporis.
        Iure eum quam dolores. Excepturi vero, consequuntur quasi rem voluptates nam, odio suscipit ipsum dolorum tempore sunt temporibus nostrum pariatur, provident voluptatum harum quae distinctio voluptatibus facere corrupti ea explicabo!
        Numquam modi inventore ea magnam voluptates sunt facilis minus, quam voluptas assumenda neque illo iure? Asperiores quo explicabo dolorem doloremque placeat rerum delectus totam harum sunt consectetur. Facere, cum aliquam!
        Omnis nihil illum pariatur! Officia, quasi. Et, distinctio quo. Deleniti fugit nulla sit labore dolores harum vel dignissimos sunt quibusdam, autem illum qui eius error laborum, repellat animi ullam veritatis!
        Culpa numquam eaque quasi aliquam error vitae dolore, recusandae fugit corporis quisquam cumque temporibus, molestias voluptates dolor quam, ducimus eligendi! Adipisci quis neque non aliquid beatae ipsam cum veniam repudiandae.
        Ex tempora quis nulla earum in at odit ratione tempore dolores porro recusandae est consectetur distinctio ea eveniet ad adipisci saepe enim tenetur, asperiores voluptatem! Excepturi delectus ipsa eos fugit!
        Odit, sed cumque hic quisquam debitis commodi asperiores, inventore, odio id quod voluptates dicta nulla ea voluptate corporis omnis cum amet? Maxime, autem? Impedit magni explicabo accusantium, quis excepturi harum.
        Quasi et optio, obcaecati quos quam libero eveniet tempora alias dolor dolorum sit, praesentium quibusdam cumque nesciunt, dignissimos beatae aliquid iusto dolores tempore ea? Tenetur repudiandae molestiae commodi eligendi fuga?
        Voluptas cumque amet corrupti repudiandae aliquam quisquam, a atque. Consequatur id error dignissimos laborum distinctio aliquid ratione voluptas dolor in mollitia delectus, nostrum sunt voluptatem consequuntur, necessitatibus itaque sit magni.
        Eius minima reiciendis suscipit fuga cum eum itaque eos odit sunt quibusdam nulla magni id architecto a, quae, distinctio quis? Neque, repellat doloremque! Sint asperiores itaque nulla delectus, dolores velit.
        Tenetur alias asperiores reprehenderit totam facilis sequi aliquid recusandae magni dolore consequatur, qui dignissimos nobis? In vero pariatur facilis veritatis illo dolorem ratione unde. Praesentium labore natus tempore incidunt cumque!
        Suscipit, dolores? Ipsam facilis pariatur exercitationem modi ratione tempora rerum unde, aspernatur possimus beatae voluptas ipsa dolorum nostrum a fuga neque? Unde illum tempora doloremque ea mollitia vero modi impedit.
        Fugiat, deleniti blanditiis excepturi assumenda adipisci ad porro amet, maiores sit non eius labore laboriosam ut totam? Adipisci incidunt hic placeat obcaecati dolorum ad inventore. Libero cumque blanditiis expedita sunt?
        Et eius distinctio debitis, dolore cumque praesentium architecto non minima fugit laborum. Vitae sunt esse quia ea at! Quos quae magnam perferendis commodi. Consequuntur ab ipsum sed, rerum fugiat nulla.
        Minus sunt voluptas quae, eum rerum culpa expedita ipsa. Corrupti minima deleniti id at suscipit velit libero illo, voluptate et incidunt. Voluptates fugit eius beatae, modi accusantium ab laboriosam atque.
        Ab, nesciunt incidunt. Ea quod sed tempore ex ab magnam quasi, consequuntur eveniet consectetur, iste suscipit impedit hic dolore veniam enim maiores. Consequuntur, consequatur animi esse minus a tenetur quae.
        <Outlet context={{ category }} />
      </main>
    </div>
  );
};

export default Category;