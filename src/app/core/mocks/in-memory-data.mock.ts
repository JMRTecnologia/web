import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataMock implements InMemoryDbService {

    createDb() {

        const quem_somos = [
            {
                titulo: 'SIMPLES',
                texto: 'No primeiro contato, descreva brevemente seu projeto. Faremos uma análise e enviaremos nossa proposta.',
                icon: 'fi fi-rr-calendar-lines-pen'
            },
            {
                titulo: 'ÁGIL',
                texto: 'Criamos o seu sistema de acordo com a descrição do projeto, de forma rápida e com resultados visíveis em pouco tempo de trabalho.',
                icon: 'fi fi-rr-time-fast'
            },
            {
                titulo: 'SEM DESEMBOLSO',
                texto: 'Não quer mais? Ok, nenhum compromisso foi formalizado, talvez na próxima?',
                icon: 'fi fi-rr-coins'
            },
            {
                titulo: 'ATENDIMENTO',
                texto: 'Atendemos clientes em todo o Brasil, oferecendo a tranquilidade que eles precisam para focar em suas atividades.',
                icon: 'fi fi-rr-globe'
            },
            {
                titulo: 'VERSÃO',
                texto: 'A primeira versão do seu sistema já estará dentro das especificações do projeto, para que você a execute e veja se realmente atenderá suas necessidades.',
                icon: 'fi fi-rr-code-compare'
            },
            {
                titulo: 'CONTATO',
                texto: 'Ficou interessado? Entre em contato e faça um orçamento.',
                icon: 'fi fi-rr-comment-quote'
            },
        ]

        const servico = [
            {
                titulo: 'DISPONIBILIDADE',
                subTitulo: 'FACILIDADE DE ACESSO',
                paragrafo1: 'Seu sistema está 100% do tempo disponível, de qualquer lugar do mundo e a partir de vários tipos de dispositivos.',
                paragrafo2: 'Todos os usuários usam o sistema simultaneamente. Quando um registro é criado ou alterado, todos os usuários devidamente autorizados terão acesso imediato a ele.',
                image: './assets/images/servico/open.png'
            },
            {
                titulo: 'TRANQUILIDADE',
                subTitulo: 'SIMPLICIDADE, AGILIDADE E FLEXIBILIDADE',
                paragrafo1: 'Correções e novas versões são mais rápida e facilmente publicadas, já que não é necessária a presença física de técnicos para executar estas tarefa.',
                paragrafo2: 'Como roda na Web, fica desnecessária qualquer instalação de softwares nos computadores de sua empresa. Se um de seus computadores pifar, basta colocar um outro com acesso a internet e um navegador para voltar a trabalhar.',
                image: './assets/images/servico/tranquilidade.png'
            },
            {
                titulo: 'TECNOLOGIA',
                subTitulo: 'TENDÊNCIA NO MERCADO E QUALIDADE',
                paragrafo1: ' Mantemos nossos serviços atualizados com as mais recentes tecnologias e tendências do mercado, para que você possa ter certeza de que está recebendo as soluções mais inovadoras e eficientes.',
                paragrafo2: 'Comprometemos com a qualidade da tecnologia em todos os nossos serviços e soluções, oferecendo soluções inovadoras e atualizadas para atender às necessidades de nossos clientes.',
                image: './assets/images/servico/tecnologia.png'
            },

        ]

        const cliente = [
            {
                img: './assets/images/cliente/globo.png',
                nome: 'Rede Globo',
                link: 'www.globo.com',
                class: 'carousel-item active'
            },
            {
                img: './assets/images/cliente/americanas.png',
                nome: 'Lojas Americanas',
                class: 'carousel-item',
                link: 'www.americanas.com.br'
            },


        ]

        return { quem_somos, servico, cliente }
    }
}
