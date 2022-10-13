<template>
    <div class="flex h-screen justify-center">
      <div class="bg-gray-600 w-1/4">
        <BaseHeader />
  
        <div class="h-[90%] p-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700">
          <div class="bg-gray-500 h-full rounded p-2 shadow-md">
            <slot />
          </div>
        </div>
  
        <BaseFooter />
      </div>
    </div>
  </template>
