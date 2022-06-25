import { Card, Col, Button } from 'antd';

export function FoodBox(food) {
  function multiply(a, b) {
    return a * b;
  }

  return (
    <Col>
      <Card
        title={food.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.food.image} height={60} alt="food" />
        <p>Calories: {food.food.calories}</p>
        <p>Servings: {food.food.servings}</p>
        <p>
          <b>
            Total Calories:{' '}{multiply(food.food.calories, food.food.servings)}{' '}
          </b>
          kcal
        </p>
        <Button type="primary">Delete</Button>
      </Card>
    </Col>
  );
}
