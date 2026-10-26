Пример запроса:

```graphql
{
  profile {
    id
    links
    projects {
      name
      link
    }
    skills {
      name
    }
    experiences {
      company
      achievements
      startTime
      endTime
      position
    }
  }
}
```

1. Демо залито на render: https://portfolio-graphql.onrender.com/graphql
2. Приложение разбито на домены (по крайней мере 1 точно есть ;)) и на слои (route -> model (graphql) -> service -> db). Для такого приложения решил не делить на сножество доменов и сделать все в portfolio модуле, но это все расширяется.
3. В приложении используется code-first подход для генерация graphql схемы для для удобства.
4. Для решения n + 1 проблемы используется dataloader
5. Сиды идемпотентны т.к. один id между перезапусками используется

P.S.
Тесты не реализованны т.к. в условиях не было сказано
