#!/usr/bin/env bash
# Script de validação rápida para Larica Marcial

echo "🔍 Larica Marcial - Validação Rápida de Integridade"
echo "=================================================="
echo ""

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contadores
total=0
passed=0

# Função para teste
test_file() {
  local file=$1
  local description=$2
  total=$((total+1))
  
  if [ -f "$file" ]; then
    echo -e "${GREEN}✓${NC} $description"
    passed=$((passed+1))
  else
    echo -e "${RED}✗${NC} $description (não encontrado)"
  fi
}

# Função para teste de conteúdo
test_content() {
  local file=$1
  local pattern=$2
  local description=$3
  total=$((total+1))
  
  if grep -q "$pattern" "$file" 2>/dev/null; then
    echo -e "${GREEN}✓${NC} $description"
    passed=$((passed+1))
  else
    echo -e "${RED}✗${NC} $description"
  fi
}

echo "📁 Verificando estrutura de arquivos..."
test_file "index.html" "index.html existe"
test_file "App.tsx" "App.tsx existe"
test_file "types.ts" "types.ts existe"
test_file "constants.ts" "constants.ts existe"
test_file "package.json" "package.json existe"
test_file "components/Auth.tsx" "components/Auth.tsx existe"
test_file "components/Dashboard.tsx" "components/Dashboard.tsx existe"

echo ""
echo "🔧 Verificando conteúdo crítico..."
test_content "index.html" "renderWeightChart" "Função renderWeightChart encontrada"
test_content "index.html" "getMealPlanByProfile" "Função getMealPlanByProfile encontrada"
test_content "index.html" "renderMealPlan" "Função renderMealPlan encontrada"
test_content "constants.ts" "DETAILED_MEAL_PLANS" "MEAL_PLANS database encontrado"
test_content "constants.ts" "MOTIVATIONAL_MESSAGES" "Mensagens motivacionais encontradas"
test_content "types.ts" "ProgressionLevel" "Enum ProgressionLevel encontrado"
test_content "components/Auth.tsx" "video" "Vídeo integrado em Auth.tsx"

echo ""
echo "🔐 Verificando funcionalidades de autenticação..."
test_content "index.html" "authenticateUser" "Função de autenticação existe"
test_content "index.html" "registerUser" "Função de registro existe"
test_content "index.html" "simpleHash" "Hash de senha implementado"
test_content "index.html" "localStorage" "localStorage integrado"

echo ""
echo "📊 Verificando planos alimentares..."
test_content "index.html" "MEAL_PLANS.iniciante" "Plano iniciante existe"
test_content "index.html" "MEAL_PLANS.intermediario" "Plano intermediário existe"
test_content "index.html" "MEAL_PLANS.avancado" "Plano avançado existe"
test_content "index.html" "MEAL_PLANS.elite" "Plano elite existe"

echo ""
echo "=================================================="
echo -e "Resultado: ${GREEN}$passed/$total${NC} testes passaram"
echo ""

if [ $passed -eq $total ]; then
  echo -e "${GREEN}✓ TUDO OK! Sistema pronto para usar.${NC}"
  exit 0
else
  echo -e "${YELLOW}⚠ Alguns testes falharam. Revisar acima.${NC}"
  exit 1
fi
