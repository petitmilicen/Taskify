import { useNavigate } from "react-router-dom";

export function TaskCard({task}) {

  const navigate = useNavigate()

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded"
    onClick={() => {
      navigate(`/tasks/${task.id}`)
    }}
    > 
        <h1 className="text-white font-bold uppercase rounded-lg">{task.title}</h1>
        <p>{task.description}</p>
        
        <div className="flex justify-between py-2">
          {task.done ? (
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white">Done</span>
          ) : (
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">Pending</span>
          )}
        </div>

        
    </div>
  );
}