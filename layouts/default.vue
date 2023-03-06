<template>
  <div class="flex fixed top-0 left-0 w-screen h-screen antialiased">
    <!-- Sidebar  -->
    <div
      class="fixed top-0 left-0 flex flex-col z-[99] h-full px-2 py-4 lg:px-6 w-14 border-none bg-secondary-800 dark:bg-secondary-800 shadow-md transition-all duration-300 overflow-hidden lg:w-80 lg:hover:w-80 dark:shadow-secondary-900 "
    >
      <div class="relative w-full text-left mb-5 lg:mb-10">
        <h2 class="font-semibold text-xl lg:text-2xl truncate text-gray-100">
          InView
        </h2>
        <span class="text-gray-400 truncate">Maintenance Dashboard</span>
      </div>

      <div class="flex flex-col h-full justify-between">
        <!-- Manage -->
        <div class="relative w-full items-center text-left hidden lg:block">
          <h3 class="truncate font-semibold text-lg text-gray-100">
            Manage
          </h3>
        </div>
        <div class="flex-1 flex flex-col gap-2 pt-2">
          <div v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="w-full text-sm lg:text-base bg-secondary-700 flex gap-3 font-medium px-2 py-2 lg:px-5 lg:py-3 rounded-md hover:text-primary-400 text-white dark:text-gray-100 transition">
              <Icon :name="link.icon" class="w-6 h-6" /> <span class="hidden lg:inline">{{ link.label }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- ./Sidebar   -->

    <!-- Page Content  -->
    <div
      class="w-fit flex-1 items-start overflow-scroll grid pl-14 lg:pl-80"
    >
      <div class="px-2 lg:px-4 max-w-8xl py-4">
        <slot />
      </div>
    </div>
    <!-- ./Page Content  -->
  </div>
</template>
<script lang="ts">
// <Icon name="heroicons-solid:home" class="w-6 h-6" />
// <Icon name="heroicons-solid:rectangle-group" class="w-6 h-6" />

interface Link {
  label: string
  to: string
  icon: string
}

const links: Link[] = [
  {
    label: '服务器状态一览',
    to: '/',
    icon: 'heroicons-solid:server-stack'
  },
  {
    label: '源流查询',
    to: '/source-query',
    icon: 'heroicons-solid:code-bracket-square'
  },
  {
    label: '转发流查询',
    to: '/forward-flow-query',
    icon: 'heroicons-solid:chevron-double-right'
  },
  {
    label: '日志查询',
    to: '/log-query',
    icon: 'heroicons-solid:code-bracket'
  }, {
    label: '配置检查',
    to: '/configuration-check',
    icon: 'heroicons-solid:command-line'
  }
]
export default {
  name: 'DefaultLayout',
  setup () {
    return {
      links
    }
  }
}
</script>
<style scoped>

  .router-link-exact-active {
    color: #16a79e;
  }

</style>

<!-- <ul className="py-4">
  {/* Links */}
  {dashboardSidebarSectionsData.sectionLinks.map(
  ({ label, icon, href }) => (
  <li key="{label}">
    <Link href="{href}">
      <a
        className="{classNames("
        'relative
        flex
        h-14
        flex-row
        items-center
        gap-5
        rounded-xl
        px-4
        pr-6
        hover:bg-primary
        5
        focus:outline-none
        lg:mx-4
        lg:px-4',
        {
        'border-primary
        bg-primary
        5':
        pathname="=="
        href,
        }
        )}
      >
        <span
          className="{classNames("
          'inline-flex
          items-center
          justify-center',
          {
          'text-primary':
          pathname="=="
          href,
          }
          )}
        >
          {icon}
        </span>
        <span
          className="{classNames("
          'truncate
          text-lg
          font-medium
          tracking-wide',
          {
          'font-bold
          text-primary':
          pathname="=="
          href,
          }
          )}
        >
          {label}
        </span>
      </a>
    </Link>
  </li>
  )
  )}
  <li
    className="grid
    place-items-center
    lg:hidden"
  >
    {!expand ? <ChevronDoubleRightIcon class-name="mt-5 w-5" /> : null}
  </li>
</ul> -->
