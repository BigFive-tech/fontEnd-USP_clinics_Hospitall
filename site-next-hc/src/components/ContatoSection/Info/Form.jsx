export default function Form() {
  return (
    <form action="">
      <input type="text" placeholder="Nome" name="formulario-nome" id="formulario-nome" required />
      <input type="email" placeholder="E-mail" name="forumulario-email" id="formulario-email" required />
      <input type="text" placeholder="Assunto" name="formulario-assunto" id="formulario-assunto" required />
      <textarea name="formulario-textarea" id="formulario-textarea" cols="30" rows="10" placeholder="Sua Mensagem" required></textarea>
      <button className="btn" id="formulario-botao" onclick="onSubmit(event)">Enviar Mensagem</button>
    </form>
  )
}