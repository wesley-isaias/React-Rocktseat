# Política permanente de economia do GitHub Actions — modelo B híbrido

**Decisão do proprietário: 19/10/2026.** Aplicar em todas as tarefas deste projeto. Referência canônica reutilizável: [wesley-project-template](https://github.com/wesley-isaias/wesley-project-template/blob/main/docs/GITHUB-WORKFLOW.md#github-actions-cost-discipline--hybrid-model-b).

1. **Economia máxima:** executar testes unitários, lint, typecheck, build local, verificações negativas e análise estática em ambiente autorizado **antes** de usar Actions. Codex/revisão forte não substitui homologação runtime.
2. **Reduzir execuções:** trabalhar em PR Draft enquanto houver alterações, agrupar commits/pushes e não fazer reruns sem correção material. Não gastar CI por documentação simples quando não houver gate exigido.
3. **Modelo B:** CI leve e seletivo apenas nos pontos de revisão necessários; builds pesados, imagens, integração e testes adversariais pelo gatilho manual autorizado, preferencialmente no SHA final. Usar timeout, filtros de caminhos, concorrência e permissões mínimas quando seguro.
4. **Nunca dispensar controles:** manter branch protection, required checks, segurança, testes obrigatórios, isolamento, rastreio do SHA e aprovações. Se um gatilho manual deixar check obrigatório pendente, interromper e corrigir o desenho; não falsificar CI, não converter ensaio local em homologação e não usar produção como runner de teste.
5. **Sem deploy implícito:** gastos, merges, staging/produção, migrações, credenciais e operações destrutivas exigem autorizações específicas. Esta política **não cria/desativa workflow**, não autoriza Actions, não altera pipelines existentes e não permite burlar falhas.
6. **Transparência:** em execução necessária registrar workflow, commit exato, motivo, tentativas, run e minutos conhecidos. Projeto sem workflows não deve criá-los apenas para cumprir esta política.

## Texto obrigatório em cada missão dos executores

> **ECONOMIA DE ACTIONS:** use o mínimo absoluto de GitHub Actions; valide localmente antes, agrupe commits/pushes e execute CI apenas quando estritamente indispensável e autorizado, preservando todos os gates de segurança.

Alterações futuras de gatilhos exigem inventário `ANTES → DEPOIS`, conferência de required checks, revisão e PR separado, sem disparar CI automaticamente.
