import React, { useEffect, useState } from "react";
import { Cell, Group } from "@vkontakte/vkui";

const questsData = [
  {
    id: 1,
    description: "Накопить 10 монет",
    condition: (balance) => balance >= 10,
    completed: false,
  },
  {
    id: 2,
    description: "Перейти 2 lvl",
    condition: (level) => level >= 2,
    completed: false,
  },
  {
    id: 3,
    description: "Купить предмет в магазине",
    condition: (level) => level >= 2,
    completed: false,
  },
];

export default function QuestModal({ balance, level }) {
  const [quests, setQuests] = useState(questsData);

  useEffect(() => {
    setQuests((prevQuests) =>
      prevQuests.map((quest) => {
        // Если квест уже выполнен, не проверяем условия повторно
        if (quest.completed) {
          return quest;
        } else if (quest.condition(balance, level)) {
          return { ...quest, completed: true };
        }
        return quest;
      })
    );
  }, [balance, level]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          backgroundColor: "gray",
          width: "200px",
          height: "70px",
          borderRadius: "40px",
        }}
      >
        Quests
      </div>
      <Group>
        {quests.map((quest) => (
          <Cell key={quest.id}>
            <div
              style={{
                textDecoration: quest.completed ? "line-through" : "none",
              }}
            >
              {quest.description}
            </div>
          </Cell>
        ))}
      </Group>

      <div></div>
    </div>
  );
}
