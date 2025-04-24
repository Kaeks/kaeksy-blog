export const useSubpages = async (parentPath: string, data?: { values?: [name:string] }) => {
    const router = useRouter();

    const paths = router.getRoutes()
        .filter(route => route.path.startsWith(parentPath + '/') && route.path != parentPath)
        .map(route => route.path.replace(parentPath + '/', ''));
    
    return paths;
}