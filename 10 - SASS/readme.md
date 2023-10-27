    - Nesting
    Aninhar as propriedades HTML de maneira a seguir a hierarquia HTML

    nav{
        ul{
            list-style:none;
            li{
                a{
                    color:red;
                    text-decoration:none;
                }
            }
        }

    }

    - Shorthand
    Ex:
    .card{
        display: flex;
        border:2px solid black;

        &-img{
            width:100%;
        }

        &-descricao{
            font-size:20px;
        }
    }

    - Variáveis
    $variavel: red;


    - Partials
    Dividir o arquivo em partes e fazer importações
    arquivo: _nome.scss
    import "_nome.scss"

    - Mixin
    Grupos de declarações css
    @mixin button($cor) {
        padding: 20px;
        color: white;
        background-color: $cor;
    }
    .button-orange{
        @include button(orange.);
    }
