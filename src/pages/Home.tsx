import { useAppDispatch } from '~/hooks/useAppDispatch';
import { useAppSelector } from '~/hooks/useAppSelector';
import { exampleActions } from '~/store/features/example';
import { selectCounter } from '~/store/features/example/selector';

export default function HomePage() {
  const counter = useAppSelector(selectCounter);

  const dispatch = useAppDispatch();

  return (
    <main>
      <div>Example store:</div>
      <br />
      <div>
        <button type="button" onClick={() => dispatch(exampleActions.decrememt())}>
          dec
        </button>
        <button type="button" onClick={() => dispatch(exampleActions.increment())}>
          inc
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => dispatch(exampleActions.reset())}
          style={{ width: '100%' }}
        >
          reset
        </button>
      </div>

      <div>counter: {counter}</div>
    </main>
  );
}
