interface Props{
    params : {
        nickname: string,
        text: string
    }
}

export default function Profile({ params } : Props) {
    return (
      <div className="w-screen h-screen bg-gray-300 bg-opacity-60">
        <h1 className="text-xl font-bold mb-7">PERFIL: {params.nickname}</h1>
        <p>{params.text}</p>
      </div>
    );
  }
  