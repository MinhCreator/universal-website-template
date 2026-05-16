export function DaisyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">daisyUI</h1>
      <p className="text-base-content/60 mb-6">
        Components from the daisyUI library &mdash; daisyui.com
      </p>

      <div className="flex flex-col gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Buttons</h2>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-outline">Outline</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Form Elements</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <input
                type="text"
                placeholder="Type here..."
                className="input input-bordered w-full max-w-xs"
              />
              <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
              <input type="radio" name="radio" defaultChecked className="radio radio-primary" />
              <div className="form-control w-full max-w-xs">
                <select className="select select-bordered">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Badges &amp; Alerts</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              <div className="badge badge-primary">React</div>
              <div className="badge badge-secondary">daisyUI</div>
              <div className="badge badge-outline">TypeScript</div>
            </div>
            <div role="alert" className="alert alert-success">
              <span>daisyUI is working correctly!</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Loading</h2>
            <div className="flex flex-wrap gap-4">
              <span className="loading loading-spinner loading-md"></span>
              <span className="loading loading-dots loading-md"></span>
              <span className="loading loading-ring loading-md"></span>
              <span className="loading loading-ball loading-md"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
