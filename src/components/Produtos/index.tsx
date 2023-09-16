import style from './Produtos.module.scss';
import Parceiro from '../Parceiro';
import Titulo from '../Titulo';
import Produto from './Produto';
import { IProduto } from '../../interfaces/IProduto';

interface Props {
  produtos: IProduto[],
  selecionaProduto: (produtoSelecionado: IProduto) => void;
  onModal: (onModal: boolean) => void;
}

function Produtos({ produtos, selecionaProduto, onModal }: Props) {
  return (
    <section className={style.produtos}>
      <Titulo>
        Produtos relacionados
      </Titulo>
      <nav className={style.produtos__categorias}>
        <a className={`${style.produtos__categoria} ${style['produtos__categoria--ativo']}`} href="">Celular</a>
        <a className={style.produtos__categoria} href="">Acessórios</a>
        <a className={style.produtos__categoria} href="">Tablets</a>
        <a className={style.produtos__categoria} href="">Notebooks</a>
        <a className={style.produtos__categoria} href="">TVs</a>
        <a className={style.produtos__categoria} href="">Ver todos</a>
      </nav>
      <div className={style.produtos__vitrine}>
        <ul className={style.produtos__wrap}>
          {produtos.map((produto, index) => (
            <Produto
              selecionaProduto={selecionaProduto}
              onModal={onModal}
              key={produto.id}
              {...produto}
            />
          ))}
        </ul>
        <div className={style.produtos__setas}>
          <button className={`${style.produtos__seta} ${style['produtos__seta--esq']}`} aria-label='Retroceder lista de produtos'></button>
          <button className={`${style.produtos__seta} ${style['produtos__seta--dir']}`} aria-label='Avançar lista de produtos'></button>
        </div>
      </div>

      <div className={style.produtos__parceiros}>
        <Parceiro titulo={'Parceiros'} />
        <Parceiro titulo={'Parceiros'} />
      </div>
    </section>
  )
}

export default Produtos;