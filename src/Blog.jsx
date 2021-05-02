import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


function ArticleCard(props) {
    const { id, categoryName, title, postedAt, summary, imageUrl } = props;
    return (
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">
            {categoryName}
          </strong>
          <h3 class="mb-0">{title}</h3>
          <div class="mb-1 text-muted">{postedAt}</div>
          <p class="card-text mb-auto">{summary}</p>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img
            class="bd-placeholder-img"
            width="200"
            height="250"
            aria-label="Placeholder: Thumbnail"
            src={imageUrl}
            alt={title}
          />
        </div>
      </div>
    );
}

class Blog extends Component {
        render(){
        return(
             <div className="row mb-2">
                <div className="col-md-6">
                    <hr/>
                    <ArticleCard
                        id={1}
                        categoryName={'Klan Uzumaki'}
                        title={'Naruto Uzumaki'}
                        postedAt={'29/02/1981'}
                        summary={'Naruto (ナルト) nyaéta manga sarta anime karya Masashi Kishimoto. Nyaritakeun saputer kahirupan inohong utamana, Naruto Uzumaki, saurang ninja rumaja anu berisik, hiperaktif, sarta ambisius; sarta petualangannya dina ngawujudkeun kahayang pikeun meunangkeun gelar Hokage, ninja pangkuatna di désana.'}
                        imageUrl={'https://i.pinimg.com/564x/db/94/30/db9430106f1befc31458a1dfce5d5c78.jpg'}
                    />
                </div>
                <div className="col-md-6">
                    <hr/>
                    <ArticleCard
                        id={2}
                        categoryName={'Klan Uchiha'}
                        title={'Sasuke Uchiha'}
                        postedAt={'31/11/1981'}
                        summary={'Sasuke Uchiha (うちは サスケ) es un personaje ficticio de la serie de manga y anime Naruto, creada por el mangaka Masashi Kishimoto. Inicialmente, el autor no tenía intenciones de crear a Sasuke, pero tras consultarlo con su editor, decidió concebir un rival para el protagonista principal de la obra, Naruto Uzumaki, lo que conllevó a la creación de este.'}
                        imageUrl={'https://i.pinimg.com/564x/4c/fb/95/4cfb95d2cd200a5b3be4c7032614936c.jpg'}
                    />
                </div>
                <div className="col-md-6">
                    <hr/>
                    <ArticleCard
                        id={3}
                        categoryName={'Klan Nara'}
                        title={'Nara Shikamaru'}
                        postedAt={'30/13/1981'}
                        summary={'Shikamaru Nara (奈良シカマル) inggih punika salah satunggaling tokoh protagonis wonten ing sérial manga lan anime Naruto. "Shika" artosipun rusa lan "maru" saged ngemu teges "bunderan" utawi "ngrembaka kanthi saé" nanging asring kaginakaken kanthi nama putra ingkang jaler. Nara inggih punika ugi salah satunggaling nama prefektur lan kutha ing Jepang ingkang gadhah taman ingkang kathah rusanipun.'}
                        imageUrl={'https://i.pinimg.com/236x/a8/4b/6f/a84b6fbe0d93df25b01792163284adb5.jpg'}
                    />
                </div>
                <div className="col-md-6">
                    <hr/>
                    <ArticleCard
                        id={4}
                        categoryName={'Klan Kazekage'}
                        title={'Temari'}
                        postedAt={'32/10/1981'}
                        summary={'Temari adalah nama seorang tokoh fiksi dari anime dan manga Naruto. Ia adalah tokoh utama wanita dari Sunagakure yang merupakan kakak dari Kankurou dan Gaara. Temari pertama kali muncul di Ujian Chuunin. Temari juga berarti bola untuk mainan anak perempuan di Jepang yang dibuat dari benang, kain, atau karet. Temari adalah gadis yang menggunakan kipas super besarnya untuk menyerang.'}
                        imageUrl={'https://i.pinimg.com/564x/f1/ba/4c/f1ba4ce4c3074052998a17f92e8e17f6.jpg'}
                    />
                </div>
            </div>
        );
    }
}
export default Blog;