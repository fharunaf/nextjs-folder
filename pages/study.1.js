function Profile() {
  return (
    <img src="https://i.imgur.com/MK3eW3As.jpg"
    alt="Katherine Johnson" />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <p>Reactアプリケーションはコンポーネントと呼ばれる独立したUIのパーツで構成されています。Reactコンポーネントとは、マークアップを添えることができるJavaScript関数です。<br />コンポーネントは、ボタンのような小さなものであることもあれば、ページ全体といった大きなものであることもあります。以下は、3つのprofileコンポーネントをレンダーするgalleryコンポーネントの例です。</p>
    </section>
  );
}