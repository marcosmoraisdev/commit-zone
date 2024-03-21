import Link from "next/link";

export default function page404() {
  return (
    <div>
      <h1>Parece que você se perdeu meu amigo!</h1>
      <Link href={"/"}>Voltar para home!</Link>
    </div>
  );
}
