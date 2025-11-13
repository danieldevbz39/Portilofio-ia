# 🎯 Campo de Destaque - Animação Fade In/Out

## Descrição

Novo campo visual adicionado à seção "Refeições de Hoje" com animações suaves de fade in/out para exibir mensagens motivacionais e piadas com efeito de destaque.

## 📍 Localização

**Arquivo:** `index.html`  
**Seção:** Dashboard → Refeições de Hoje → Destaque do Momento

## 🎬 Comportamento da Animação

### Ciclo de Vida (60 segundos total)
```
0s ─────────────────────────────────────────────────────────────────→ 60s
↓ Fade In (1s)                                    Fade Out (1s)      ↓
[Mensagem aparece esfumaçando] ──→ [Fixo 58s] ──→ [Desaparece] ──→ [Próxima]
```

### Detalhes de Animação
- **Fade In:** 1 segundo (opacidade 0 → 1)
- **Fixação:** 58 segundos (opacidade 100%)
- **Fade Out:** 1 segundo (opacidade 1 → 0)
- **Total por mensagem:** 60 segundos
- **Transição:** `ease-in-out` para suavidade

## 🎨 Estilos Aplicados

### Container
```css
.mt-4 p-3 rounded-md bg-yellow-900/20 border-l-4 border-yellow-400
```
- Fundo amarelado translúcido
- Borda esquerda amarela em destaque
- Padding confortável (12px)

### Label
```
✨ Destaque do Momento
```
- Cor: Amarelo claro (#facc15)
- Tamanho: Extra pequeno (xs)
- Peso: Semi-bold

### Texto
```
id="destaqueText"
class="text-sm text-yellow-100 italic destaque-fade-in"
```
- Cor: Amarelo claro com transparência
- Tamanho: Pequeno (14px)
- Estilo: Itálico
- Animação: Classe dinâmica `destaque-fade-in` ou `destaque-fade-out`

## 💻 Código HTML

```html
<!-- Destaque com fade in/out -->
<div class="mt-4 p-3 rounded-md bg-yellow-900/20 border-l-4 border-yellow-400">
  <p class="text-xs font-semibold text-yellow-300 mb-1">✨ Destaque do Momento</p>
  <p id="destaqueText" class="text-sm text-yellow-100 italic destaque-fade-in">Carregando...</p>
</div>
```

## 🎭 Keyframes CSS

### Fade In
```css
@keyframes fadeInDestaque {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Fade Out
```css
@keyframes fadeOutDestaque {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

## ⚙️ Função JavaScript

### `rotateDestaque(elId, items, fixationTime = 60000)`

**Parâmetros:**
- `elId` (string): ID do elemento HTML onde as mensagens serão exibidas
- `items` (array): Array com as mensagens/piadas a rotacionar
- `fixationTime` (number): Tempo total em millisegundos (padrão: 60000ms = 60s)

**Comportamento:**
1. Exibe o primeiro item com fade in (1s)
2. Mantém fixo por 58 segundos
3. Faz fade out (1s)
4. Repete com o próximo item do array

**Exemplo de uso:**
```javascript
rotateDestaque("destaqueText", MOTIVATIONAL.concat(JOKES), 60000);
```

## 🔄 Integração com DOMContentLoaded

A função é chamada automaticamente quando a página carrega:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // ... outras inicializações ...
  rotateDestaque("destaqueText", MOTIVATIONAL.concat(JOKES), 60000);
  // ...
});
```

## 📊 Dados Utilizados

Exibe mensagens alternadas de:
- **MOTIVATIONAL:** Array de mensagens motivacionais por nível
- **JOKES:** Array de piadas educacionais

Total: ~30+ mensagens diferentes (4 níveis × ~8 motivacionais + ~12 piadas)

## 🎯 Casos de Uso

1. **Motivação:** Exibir mensagens inspiracionais sobre nutrição e treinamento
2. **Educação:** Mostrar dicas práticas sobre hábitos alimentares
3. **Engajamento:** Manter usuário engajado com conteúdo variado
4. **Humor:** Piadas leves relacionadas a fitness e academia

## 🔧 Customizações Possíveis

### Alterar tempo de fixação
```javascript
rotateDestaque("destaqueText", MOTIVATIONAL.concat(JOKES), 45000); // 45 segundos
```

### Usar apenas mensagens motivacionais
```javascript
rotateDestaque("destaqueText", MOTIVATIONAL[ProgressionLevel.AVANCADO], 60000);
```

### Usar apenas piadas
```javascript
rotateDestaque("destaqueText", JOKES, 60000);
```

### Alterar velocidade de fade
Modifique no CSS:
```css
.destaque-fade-in { 
  animation: fadeInDestaque 2s ease-in-out forwards; /* 2s em vez de 1s */
}
.destaque-fade-out { 
  animation: fadeOutDestaque 2s ease-in-out forwards; /* 2s em vez de 1s */
}
```

## 🐛 Debugging

Se as mensagens não aparecerem:

1. **Verificar console:** Abrir DevTools (F12) → Console
2. **Verificar se elemento existe:**
   ```javascript
   console.log(document.getElementById('destaqueText'));
   ```
3. **Verificar se função foi chamada:**
   ```javascript
   console.log('rotateDestaque inicializado');
   ```
4. **Verificar se array tem dados:**
   ```javascript
   console.log(MOTIVATIONAL.concat(JOKES).length);
   ```

## ✅ Validação

- ✅ CSS animações suaves (ease-in-out)
- ✅ Sem conflitos com outras animações
- ✅ Responsivo em todos os viewports
- ✅ Acessível (texto legível em todo o ciclo)
- ✅ Performance otimizada (sem lag)
- ✅ Compatível com navegadores modernos

## 📝 Notas

- A animação usa `opacity` ao invés de `transform` para melhor performance
- Tempo total de 60s foi escolhido para dar tempo suficiente de leitura
- As transições `ease-in-out` criam efeito suave e natural
- O componente é independente das outras rotações (mainQuote e mealsQuote)

---

**Versão:** 1.0  
**Data de Implementação:** Novembro 2025  
**Status:** ✅ Ativo e Funcional
