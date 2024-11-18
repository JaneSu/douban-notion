import React from 'react';

export default function Popup() {
  return (
    <div className="w-[300px] min-h-[400px] p-4 bg-gray-50">
      {/* 头部 */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">我的扩展</h1>
        <p className="text-sm text-gray-600">使用 Tailwind CSS 构建的示例页面</p>
      </header>

      {/* 卡片列表 */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">📚</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">阅读列表</h3>
              <p className="text-sm text-gray-500">3 个未读项目</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">✅</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">待办事项</h3>
              <p className="text-sm text-gray-500">2 个待处理</p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          添加新项目
        </button>
      </div>
    </div>
  );
} 